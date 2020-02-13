// Javascript for PROJECT: CALCULATOR
const output = document.querySelector('#output')
const btns = document.querySelectorAll('button');
const acBtn = document.querySelector('#ac');
const backspaceBtn = document.querySelector('#backspace');
const pointBtn = document.querySelector('#point');

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a/b;
}

btns.forEach((btn) => {
    if (!isNaN(parseInt(btn.textContent))) {
        btn.addEventListener('click', (e) => {
            output.textContent += btn.textContent;
        })
    } else if (btn.textContent === '.') {
        btn.addEventListener('click', (e) => {
            output.textContent += btn.textContent;
            pointBtn.disabled = true;
        })
    }
})
acBtn.addEventListener('click', (e) => {
    output.textContent = '';
    pointBtn.disabled = false;
})
backspaceBtn.addEventListener('click', (e)=>{
    if (output.textContent.slice(-1) === '.'){
        output.textContent = output.textContent.slice(-output.textContent.length, -1);
        pointBtn.disabled = false;
    } else {
        output.textContent = output.textContent.slice(-output.textContent.length, -1);
    }
})