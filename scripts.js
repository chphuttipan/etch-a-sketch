// 1. Create a container DOM and style it
const container = document.getElementById('container');
container.style.margin = 'auto';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '720px';
container.style.height = '720px';

// Create a button to clear the grid
const containerButton = document.getElementById('clear-button');
containerButton.style.marginBottom = '20px';
const clearButton = document.createElement('button');
clearButton.textContent = "New Paper";
containerButton.appendChild(clearButton);

// 2. Change the background color during hover with javascript
function handleMouseOver (event) {
    event.target.style.backgroundColor = 'red';
}

function handleMouseOut (event) {
    event.target.style.backgroundColor = 'white';
}

// 3. Create a 16x16 grid of square divs
function createPaper (box, sideSize, gap) {
    const gridSize = sideSize;
    const totalSquare = gridSize * gridSize;

    /* 
    Calculate the size of the square 
    the fullwidth of screen minus the gap 
    (total grap = number of gap * size in px)
    after that we have the remaining area
    it would divide by the number of the square (16)
    */
    const squareWidth = `calc((100% / (${gridSize} + 1))`;

    for (let i = 0; i < totalSquare; i++) {
        const square = document.createElement('div');
        square.style.width = squareWidth;
        square.style.height = squareWidth;
        square.style.border = '1px solid black';
        square.classList.add('square-grid');
        square.addEventListener('mouseenter', handleMouseOver);
        box.appendChild(square);
    }
}

window.onload = createPaper(container, 20, 1);

// 4. Create a new paper after click the button
clearButton.addEventListener('click', () => {
    let side = Number(prompt("How many squares you want each side? "));
    if (side <= 100) {
        container.innerHTML = '';
        createPaper(container, side, 1);
    }
    else {
        console.log("Your side selection is too much, it should not be more than 100.")
    }
})

