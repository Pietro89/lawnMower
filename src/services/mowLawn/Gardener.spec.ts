import chai from "chai";
import "mocha";
import {Gardener} from "./Gardener";
import {
    exampleLawnToMow,
    lawnToMowWithInvalidAction,
    finalPositions,
    finalPositionsWithInvalidAction
} from "../../tests/mocks"

describe('Gardener', () => {

    it('should mow lawn and return position of -1,-1,xx when actions are invalid', async () => {
        const gardener = new Gardener(lawnToMowWithInvalidAction())
        const result = gardener.mowLawn()
        chai.expect(result).to.deep.equal(finalPositionsWithInvalidAction())
    })

    it('should mow lawn and return positions of mowers', async () => {

        const gardener = new Gardener(exampleLawnToMow())
        const result = gardener.mowLawn()
        chai.expect(result).to.deep.equal(finalPositions())
    })
})
