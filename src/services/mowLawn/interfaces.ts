/**
 * A coordinate of the field
 */
interface Coordinate {
    x: number,
    y: number
}

/**
 * A position made of a coordinate an orientation
 */
interface Position extends Coordinate {
    orientation: string
}

/**
 * A mower operation contains the initial position of the mower and the array of actions it is supposed
 * to perform on the lawn
 */
interface MowerOperation {
    initialPosition: Position,
    actions: string[]
}

/**
 * A lawn to mow with an operationFieldTopCorner to determine the dimension of the field and an array of mower operations to perform
 */
interface LawnToMow {
    operatingFieldTopCorner: Coordinate,
    mowersOperations: MowerOperation[]
}

export {Coordinate, MowerOperation, LawnToMow, Position}

