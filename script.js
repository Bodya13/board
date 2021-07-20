const board = document.querySelector('#board');
const colors = ['#edfff0', '#c1e6c7', '#93d99f', '#6dc97d', '#43a855', '#30f253', '#127a25'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}