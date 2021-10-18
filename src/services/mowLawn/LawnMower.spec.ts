import chai from "chai";
import "mocha";
import {LawnMower} from "./LawnMower";

describe('LawnMower turning', () => {

    it('should hold the initial position', async () => {
        const mowLawner = new LawnMower({x: 1, y: 1, orientation: 'N'}, {x: 5, y: 5})
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 1, y: 1, orientation: 'N'});
    })

    it('should turn left (From north to west)', async () => {
        const mowLawner = new LawnMower({x: 1, y: 1, orientation: 'N'}, {x: 5, y: 5})
        mowLawner.turnLeft()
        chai.expect(mowLawner.currentPosition.orientation).to.equal('W');
    })

    it('should turn left (From west to south)', async () => {
        const mowLawner = new LawnMower({x: 1, y: 1, orientation: 'W'}, {x: 5, y: 5})
        mowLawner.turnLeft()
        chai.expect(mowLawner.currentPosition.orientation).to.equal('S');
    })

    it('should turn right (from north to east)', async () => {
        const mowLawner = new LawnMower({x: 1, y: 1, orientation: 'N'}, {x: 5, y: 5})
        mowLawner.turnRight()
        chai.expect(mowLawner.currentPosition.orientation).to.equal('E');
    })

    it('should turn right (from west to north)', async () => {
        const mowLawner = new LawnMower({x: 1, y: 1, orientation: 'W'}, {x: 5, y: 5})
        mowLawner.turnRight()
        chai.expect(mowLawner.currentPosition.orientation).to.equal('N');
    })
})

describe('LawnMower mooving', () => {

    it('should moove from 0,0 to 0,1 when facing north', async () => {
        const mowLawner = new LawnMower({x: 0, y: 0, orientation: 'N'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 0, y: 1, orientation: 'N'});
    })

    it('should moove from 5,5 to 5,4 when facing south', async () => {
        const mowLawner = new LawnMower({x: 5, y: 5, orientation: 'S'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 5, y: 4, orientation: 'S'});
    })

    it('should moove from 5,5 to 4,5 when facing west', async () => {
        const mowLawner = new LawnMower({x: 5, y: 5, orientation: 'W'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 4, y: 5, orientation: 'W'});
    })

    it('should moove from 0,0 to 1,0 when facing east', async () => {
        const mowLawner = new LawnMower({x: 0, y: 0, orientation: 'E'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 1, y: 0, orientation: 'E'});
    })

    it('should not moove from 5,5 when facing north', async () => {
        const mowLawner = new LawnMower({x: 5, y: 5, orientation: 'N'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 5, y: 5, orientation: 'N'});
    })

    it('should not moove from 0,0 when facing south', async () => {
        const mowLawner = new LawnMower({x: 0, y: 0, orientation: 'S'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 0, y: 0, orientation: 'S'});
    })

    it('should not moove from 0,0 when facing west', async () => {
        const mowLawner = new LawnMower({x: 0, y: 0, orientation: 'W'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 0, y: 0, orientation: 'W'});
    })

    it('should not moove from 5,5 when facing east', async () => {
        const mowLawner = new LawnMower({x: 5, y: 5, orientation: 'E'}, {x: 5, y: 5})
        mowLawner.moove()
        chai.expect(mowLawner.currentPosition).to.deep.equal({x: 5, y: 5, orientation: 'E'});
    })
})
