const facesStr = ['faceUp', 'faceDown', 'faceFront', 'faceBack', 'faceLeft', 'faceRight'];
const colorsStr = ['yellow', 'white', 'red', 'orange', 'blue', 'green'];
const rowsStr = ['I', 'II', 'III'];
// let faces = {
//     up: {
//         I: [yellow, yellow, yellow],
//         II: [yellow, yellow, yellow],
//         III: [yellow, yellow, yellow]
//     }
// }

let faces = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];

for(indexFace = 0; indexFace < 6; indexFace += 1) {
    for(indexRow = 0; indexRow < 3; indexRow +=1) {
        for(indexCol = 0; indexCol < 3; indexCol +=1) {
            faces[indexFace][indexRow][indexCol] = colorsStr[indexFace];
        }
    }
}

for(indexFace = 0; indexFace < 6; indexFace += 1) {
    console.log(facesStr[indexFace]);
    for(indexRow = 0; indexRow < 3; indexRow +=1) {
        for(indexCol = 0; indexCol < 3; indexCol +=1) {
            console.log(faces[indexFace][indexRow][indexCol]);
        }
    }
}
