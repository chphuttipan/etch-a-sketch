// 1. Create a container DOM and style it
const container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '512px';
container.style.height = '512px';

// 2. Create a 16x16 grid of square divs
const gridSize = 16
const totalSquare = gridSize * gridSize;
const squareWidth = `calc((100% - 1px * (${gridSize} - 1)) / (${gridSize} + 1))`;
for (let i = 0; i < totalSquare; i++) {
    const square = document.createElement('div');
    square.style.width = squareWidth;
    square.style.height = squareWidth;
    square.style.border = '1px solid black';
    square.style.hover = ''
    container.appendChild(square);
}

// 3. Change the background color during hover with javascript