let input = 4;
const container = document.getElementById('gridContainer');


for(let i = 0; i < input * input; i++){
    const gridBox = document.createElement('div')
    gridBox.classList.add(`box${i}`)
    gridBox.style.minHeight = "50px";
    gridBox.style.minWidth = "50px";
    gridBox.style.borderStyle = "dotted";
    container.appendChild(gridBox);
}