import {Request, Response} from "express";
import logger from "../../utils/logger/index"
import {parseFileFromRequest} from "../../utils/files";
import {ERROR_CODES, ERROR_MESSAGES} from "../../utils/errors";
import {Gardener} from "../../services/mowLawn/Gardener";
import {MowLawnParser} from "../../services/parser/MowLawnParser";

/**
 * Controller for the POST /mowlawn route. (Editor may lint as Unused but thats actually the main controller)
 * @param req the http Request with body containing the inputFile
 * @param res the http Response with the stringified text of the final positions
 */
export const postMowLawn = async (req: Request, res: Response): Promise<Response> => {
    try {
        const file = parseFileFromRequest('inputFile', req);

        if (!file) {
            return res.status(400).send(ERROR_MESSAGES.MISSING_FILE);
        }

        const mowToLawn = MowLawnParser.parseInstructions(file)

        if (!mowToLawn) {
            return res.status(400).send(ERROR_MESSAGES.INVALID_FILE_FORMAT);
        }

        const gardener = new Gardener(mowToLawn)
        const finalPositions = gardener.mowLawn()
        const result = MowLawnParser.stringifyFinalPositions(finalPositions)

        return res.status(200).send(result);
    } catch (e: any) {

        if (e === ERROR_CODES.INVALID_FILE_FORMAT) {
            res.status(400).send(ERROR_MESSAGES.INVALID_FILE_FORMAT);
        }

        logger.error(JSON.stringify(e.stack, null, 2))
        return res.status(500).send();
    }
}

