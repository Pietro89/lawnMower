import {Coordinate, MowerOperation, LawnToMow, Position} from "../mowLawn/interfaces";

/**
 * This is a parser that allows parsing and stringify the input files for the lawn mower,
 * in a real world api this probably wouldn't exist as JSON would be passed to the POST body
 */
class MowLawnParser {
    /**
     * Parse the text of the file into a LawnToMow object that the Gardener can understand
     * @param instructions the text of the instructions to be parsed
     * @return a LawnToMow to pass to the Gardener or null if the instructions are invalid
     */
    static parseInstructions(instructions: string): LawnToMow | null {
        if (!instructions) {
            return null
        }
        const instructionLines = instructions.split('\n')

        if (!instructionLines || instructionLines.length < 3) {
            return null
        }

        const xy = instructionLines.shift()!.split(" ")
        const operatingFieldTopCorner: Coordinate = {
            x: parseInt(xy[0]),
            y: parseInt(xy[1])
        }

        if (operatingFieldTopCorner.x < 0 || operatingFieldTopCorner.y < 0) {
            return null
        }

        const mowersOperations = []

        for (let i = 0; i < instructionLines.length; i += 2) {
            if (!instructionLines[i] || !instructionLines[i + 1]) {
                return null
            }
            const lineArr = instructionLines[i].split(" ")
            mowersOperations.push({
                initialPosition: {
                    x: parseInt(lineArr[0]),
                    y: parseInt(lineArr[1]),
                    orientation: lineArr[2]
                },
                actions: instructionLines[i + 1].split("")
            } as MowerOperation)
        }

        return {
            operatingFieldTopCorner,
            mowersOperations
        }
    }

    /**
     * Stringify the array of positions to output them as text
     * @param finalPositions a string with one mower position per line
     */
    static stringifyFinalPositions(finalPositions: Position[]): string {
        return finalPositions.map((position) => `${position.x} ${position.y} ${position.orientation}`).join('\n')
    }

}

export {MowLawnParser}