import {Coordinate, Position} from "./interfaces";

const orientations: string[] = ['N', 'E', 'S', 'W']

class MowLawner {
    currentPosition: Position
    operatingFieldTopCorner: Coordinate

    constructor(initialPosition: Position, fieldTopCorner: Coordinate) {
        this.currentPosition = initialPosition;
        this.operatingFieldTopCorner = fieldTopCorner;
    }

    /**
     * Turn the orientation to the left, select the previous element in the orientations array
     */
    turnLeft() {
        this.currentPosition.orientation = orientations[orientations.indexOf(this.currentPosition.orientation) - 1] || orientations[orientations.length - 1]
    }

    /**
     * Turn the orientation to the right, select the following element in the orientations array
     */
    turnRight() {
        this.currentPosition.orientation = orientations[orientations.indexOf(this.currentPosition.orientation) + 1] || orientations[0]
    }

    /**
     * Moove this lawner of 1 in the current orientation and avoid going out of the field
     */
    moove() {
        let {currentPosition: {orientation}, currentPosition, operatingFieldTopCorner} = this

        if (orientation === 'N') {
            if (currentPosition.y === operatingFieldTopCorner.y) {
                return
            }
            currentPosition.y += 1
        }

        if (orientation === 'S') {
            if (currentPosition.y === 0) {
                return
            }
            currentPosition.y -= 1
        }

        if (orientation === 'E') {
            if (currentPosition.x === operatingFieldTopCorner.x) {
                return
            }
            currentPosition.x += 1
        }

        if (orientation === 'W') {
            if (currentPosition.x === 0) {
                return
            }
            currentPosition.x -= 1
        }
    }


}

export {MowLawner}
