const colorButton = document.getElementById('colorButton');
const colorDisplay = document.getElementById('colorDisplay');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorButton.style.backgroundColor = randomColor;
    colorDisplay.textContent = `Current Color: ${randomColor}`;
});
