// 1. Create a 16x16 grid of square divs
const container = document.getElementById('container');

function  createSquareGrid(box, gridSize) {

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const squareGrid = document.createElement('div');
        squareGrid.className = 'grid-square';
        box.appendChild(squareGrid);
    }
}

createSquareGrid(container, 16);