const container = document.getElementById('gridContainer');
const slider = document.getElementById('slider');
const drawButton = document.getElementById('draw');
const eraseButton = document.getElementById('erase');
const rainbowButton = document.getElementById('rainbow');
let lastButtonClicked = '';

input = slider.value
sliderChange(input);
drawFilled();

slider.onchange = function(){
    let input = slider.value;
    sliderChange(input);

    if(lastButtonClicked === 'draw'){
        drawFilled();
    }else if(lastButtonClicked === 'rainbow'){
        rainbow();
    }else{
        drawFilled();
    }
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
            div.classList.remove('rainbow');
            div.style.backgroundColor = '';
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

}

drawButton.addEventListener('click', () =>{
    lastButtonClicked = 'draw';
    drawFilled();
})

eraseButton.addEventListener('click', () =>{
    erase();
})

rainbowButton.addEventListener('click', () =>{
    lastButtonClicked = 'rainbow';
    rainbow();
})

function drawFilled() {
    const hoverOverBox = document.querySelectorAll('.box');
    hoverOverBox.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('filled');
            div.classList.remove('rainbow')
            div.style.backgroundColor = '';
        })
    })
}

function erase() {
    const hoverOverBox = document.querySelectorAll('.box');
    hoverOverBox.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.remove("filled");
            div.classList.remove('rainbow');
            div.style.backgroundColor = '';
        })
    })
}

function rainbow() {
    const hoverOverBox = document.querySelectorAll('.box');
    hoverOverBox.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('rainbow');
            div.style.backgroundColor = pastelColors();
            div.classList.remove('filled');
        })
    })
}

//got this from @crowe7 who got it from stackoverflow. He told me to take this
function pastelColors(){
    let r = (Math.round(Math.random()* 127) + 127).toString(16);
    let g = (Math.round(Math.random()* 127) + 127).toString(16);
    let b = (Math.round(Math.random()* 127) + 127).toString(16);
    return '#' + r + g + b;
}