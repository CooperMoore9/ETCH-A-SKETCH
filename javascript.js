let input = 4;
const container = document.getElementById('gridContainer');
container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

for(let i = 0; i < input * input; i++){
    const gridBox = document.createElement('div');
    gridBox.classList.add(`box`);
    container.appendChild(gridBox);
}

const hoverOverBox = document.querySelectorAll('.box');
hoverOverBox.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("filled")
    })
})