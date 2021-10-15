import {LawnToMow, Position} from "./interfaces";
import {LawnMower} from "./LawnMower";

class Gardener {

    mowToLawn: LawnToMow

    constructor(mowToLawn: LawnToMow) {
        this.mowToLawn = mowToLawn
    }

    /**
     * Mows lawn and return an array of mower PositionS or a position of -1,-1 when actions are invalid
     */
    mowLawn(): Position[] {
        const {mowersOperations, operatingFieldTopCorner} = this.mowToLawn
        return mowersOperations.map((mowerOperation) => {
            const {initialPosition, actions} = mowerOperation
            const mower = new LawnMower(initialPosition, operatingFieldTopCorner)

            for (const action of actions) {
                if (action === 'L') {
                    mower.turnLeft()
                }
                else if (action === 'R') {
                    mower.turnRight()
                }
                else if (action === 'F') {
                    mower.moove()
                } else {
                    // invalid action
                    return {
                        x: -1,
                        y: -1,
                        orientation: 'xx'
                    }
                }
            }

            return mower.currentPosition
        })
    }
}

export {Gardener}
