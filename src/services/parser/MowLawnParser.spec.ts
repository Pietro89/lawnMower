import chai from "chai";
import "mocha";
import {MowLawnParser} from "./MowLawnParser";
import {exampleInputText, exampleLawnToMow, finalPositions, stringifiedFinalPositions} from "../../tests/mocks";

describe('MowLawnParser', () => {

    it('should parse the example text to the LawnToMow', async () => {
        const parsedLawnToMow = MowLawnParser.parseInstructions(exampleInputText)
        chai.expect(parsedLawnToMow).to.deep.equal(exampleLawnToMow());
    })

    it('should stringify the final positions', async () => {
        const stringifiedText = MowLawnParser.stringifyFinalPositions(finalPositions())
        chai.expect(stringifiedText).to.equal(stringifiedFinalPositions);
    })
})
