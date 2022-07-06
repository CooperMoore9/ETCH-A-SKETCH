const container = document.getElementById('gridContainer');
const slider = document.getElementById('slider');



// let input = 4;
// container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

// for(let i = 0; i < input * input; i++){
//     const gridBox = document.createElement('div');
//     gridBox.classList.add(`box`);
//     container.appendChild(gridBox);
// }

// const hoverOverBox = document.querySelectorAll('.box');
// hoverOverBox.forEach((div) => {
//     div.addEventListener('mouseover', () => {
//         div.classList.add("filled");
//     })
// })

slider.oninput = function(){
    const deleteTheBoxes = document.querySelectorAll('.box');
    deleteTheBoxes.forEach((div) => {
        div.remove();
    })
 
    let input = slider.value;
container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

for(let i = 0; i < input * input; i++){
    const gridBox = document.createElement('div');
    gridBox.classList.add(`box`);
    container.appendChild(gridBox);
}

const hoverOverBox = document.querySelectorAll('.box');
hoverOverBox.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("filled");
    })
})


}