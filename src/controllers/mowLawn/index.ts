import {Request, Response} from "express";
import logger from "../../utils/logger/index"
import {fileFromRequest} from "../../utils/files";
import {ERROR_CODES, ERROR_MESSAGES} from "../../utils/errors";
import {Gardener} from "../../services/mowLawn/Gardener";
import {MowLawnParser} from "../../services/parser/MowLawnParser";

/**
 * Controller for the POST /mowlawn route. (Editor may lint as Unused because of the openapi handlers)
 * @param req the http Request with body containing the inputFile
 * @param res the http Response with the stringified text of the final positions
 */
export const postMowLawn = async (req: Request, res: Response): Promise<Response> => {
    try {
        const file = fileFromRequest('inputFile', req);

        if (!file) {
            return res.status(400).send(ERROR_MESSAGES.MISSING_FILE);
        }

        const lawnToMow = MowLawnParser.parseInstructions(file)

        if (!lawnToMow) {
            return res.status(400).send(ERROR_MESSAGES.INVALID_FILE_FORMAT);
        }

        const gardener = new Gardener(lawnToMow)
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

