// Javascript for PROJECT: CALCULATOR
const output = document.querySelector('#output');
const btns = document.querySelectorAll('button');
const pointBtn = document.querySelector('#point');
let equation = [];
let result = 0;
let i = 0;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function clearOutput() {
  output.textContent = '';
  pointBtn.disabled = false;
}
function operate() {
  while (equation.includes('X')) {
    i = equation.indexOf('X');
    result = multiply(equation[i - 1], equation[i + 1]);
    equation.splice(i - 1, 3, result);
  }
  while (equation.includes('÷')) {
    i = equation.indexOf('÷');
    result = divide(equation[i - 1], equation[i + 1]);
    equation.splice(i - 1, 3, result);
  }
  while (equation.includes('-')) {
    i = equation.indexOf('-');
    result = subtract(equation[i - 1], equation[i + 1]);
    equation.splice(i - 1, 3, result);
  }
  while (equation.includes('+')) {
    i = equation.indexOf('+');
    result = add(equation[i - 1], equation[i + 1]);
    equation.splice(i - 1, 3, result);
  }
}

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (!isNaN(parseInt(btn.textContent))) {
      output.textContent += btn.textContent;
    } else if (btn.textContent === '.') {
        output.textContent += btn.textContent;
        pointBtn.disabled = true;
    } else if (btn.textContent === 'AC') {
        clearOutput();
        equation = [];
    } else if (btn.textContent === '<--') {
      output.textContent = output.textContent.slice(-output.textContent.length, -1);
        if (output.textContent.slice(-1) === '.') {
          pointBtn.disabled = false;
        } 
    } else if (btn.textContent === '=') {
        equation[equation.length] = Number(output.textContent);
        operate();
        output.textContent = result;
    } else {
        equation[equation.length] = Number(output.textContent);
        equation[equation.length] = btn.textContent;
        clearOutput();
    }
  })
})