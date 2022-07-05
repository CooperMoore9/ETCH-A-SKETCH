let input = 4;
const container = document.getElementById('gridContainer');
container.style.gridTemplateColumns = `repeat(${input}, 1fr)`

for(let i = 0; i < input * input; i++){
    const gridBox = document.createElement('div')
    gridBox.classList.add(`box${i}`)
    gridBox.style.borderStyle = "dotted";
    container.appendChild(gridBox);
}