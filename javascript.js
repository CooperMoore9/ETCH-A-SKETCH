const container = document.getElementById('gridContainer');
const slider = document.getElementById('slider');

input = slider.value
sliderChange(input);

slider.onchange = function(){
    let input = slider.value;
    sliderChange(input);
}

// For updating the div thats gonna show what input value is in real time
slider.oninput = function(input){
    input = slider.value;
    document.getElementById('userRange').textContent = `${input} x ${input}`;
}

const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () =>{
        const clearBoxes = document.querySelectorAll('.box');
        clearBoxes.forEach((div) => {
            div.classList.remove('filled');
        })
    })


function sliderChange(input) {
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

    const deleteTheBoxes = document.querySelectorAll('.box');
    deleteTheBoxes.forEach((div) => {
        div.remove();
    })

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



