// the exampleLawnToMow based on the example
export const exampleLawnToMow = () => {
    return {
        operatingFieldTopCorner: {
            x: 5,
            y: 5
        },
        mowersOperations: [
            {
                initialPosition: {
                    x: 1,
                    y: 2,
                    orientation: "N"
                },
                actions: [
                    "L",
                    "F",
                    "L",
                    "F",
                    "L",
                    "F",
                    "L",
                    "F",
                    "F"
                ]
            },
            {
                initialPosition: {
                    x: 3,
                    y: 3,
                    orientation: "E"
                },
                actions: [
                    "F",
                    "F",
                    "R",
                    "F",
                    "F",
                    "R",
                    "F",
                    "R",
                    "R",
                    "F"
                ]
            }
        ]
    }
}

// the final positions array supposed to be returned with the example
export const finalPositions = () => [
    {
        x: 1,
        y: 3,
        orientation: "N"
    },
    {
        x: 5,
        y: 1,
        orientation: "E"
    }
]

// the exampleLawnToMow with invalid actions (K, L)
export const lawnToMowWithInvalidAction = () => {
    return {
        operatingFieldTopCorner: {
            x: 5,
            y: 5
        },
        mowersOperations: [
            {
                initialPosition: {
                    x: 1,
                    y: 2,
                    orientation: "N"
                },
                actions: [
                    "L",
                    "F",
                    "L",
                    "F",
                    "L",
                    "F",
                    "L",
                    "F",
                    "F"
                ]
            },
            {
                initialPosition: {
                    x: 3,
                    y: 3,
                    orientation: "E"
                },
                actions: [
                    "K",
                    "L"
                ]
            }
        ]
    }
}

// final positions returned with the invalid action
export const finalPositionsWithInvalidAction = () => [
    {
        x: 1,
        y: 3,
        orientation: "N"
    },
    {
        x: -1,
        y: -1,
        orientation: "xx"
    }
]

export const exampleInputText = `5 5\n1 2 N\nLFLFLFLFF\n3 3 E\nFFRFFRFRRF`

export const stringifiedFinalPositions = '1 3 N\n5 1 E'