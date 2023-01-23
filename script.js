const facesStr = ['faceBack', 'faceLeft', 'faceUp', 'faceRight', 'faceFront', 'faceDown'];
const colorsStr = ['orange', 'blue', 'yellow', 'green', 'red', 'white'];
const rows = ['row1', 'row2', 'row3'];
const cols = ['col1', 'col2', 'col3'];

let faces = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];

let auxFace = [[], [], []];
let auxRowCol = [];
let auxUnityColor = ' ';
let auxUnityPlace = [' ', ' ', ' '];


for(indexFace = 0; indexFace < 6; indexFace += 1) {
    for(indexRow = 0; indexRow < 3; indexRow +=1) {
        for(indexCol = 0; indexCol < 3; indexCol +=1) {
            // faces[indexFace][indexRow][indexCol] = colorsStr[indexFace];
        }
    }
}

for(indexFace = 0; indexFace < 6; indexFace += 1) {
    // console.log(facesStr[indexFace]);
    for(indexRow = 0; indexRow < 3; indexRow +=1) {
        for(indexCol = 0; indexCol < 3; indexCol +=1) {
            // console.log(faces[indexFace][indexRow][indexCol]);
        }
    }
}

// Create a cube image
for(indexFace = 0; indexFace < 6; indexFace += 1) {
    // console.log(facesStr[indexFace]);
    const face = document.createElement('div');
    face.setAttribute('id', facesStr[indexFace]);
    face.className = 'face';
    
    for(indexRow = 0; indexRow < 3; indexRow +=1) {
        // console.log(rows[indexRow]);
        const row = document.createElement('div');
        row.className = 'row';

        for(indexCol = 0; indexCol < 3; indexCol +=1) {
            console.log(cols[indexCol]);
            const unity = document.createElement('div');
            unity.setAttribute('id', 'unity');

            unity.className = facesStr[indexFace];
            unity.className += ' ';
            unity.className += rows[indexRow];
            unity.className += ' ';
            unity.className += cols[indexCol];
            row.appendChild(unity);
        }
        face.appendChild(row);
    }
    const cube = document.getElementById('cube')
    cube.appendChild(face);
}