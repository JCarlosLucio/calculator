// Javascript for PROJECT: CALCULATOR
const btns = document.querySelectorAll('button');
const pointBtn = document.querySelector('#point');
const backspaceBtn = document.querySelector('#backspace');
const equalBtn = document.querySelector('#equal');
const output = document.querySelector('#output');
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
function equalBtnAction(){
  equation[equation.length] = Number(output.textContent);
  operate();
  output.textContent = Math.round((result + Number.EPSILON)*10000)/10000; //Rounds number to 4 decimal places
}
function backspaceBtnAction(){
  output.textContent = output.textContent.slice(-output.textContent.length, -1);
  if (output.textContent.slice(-1) === '.') {
    pointBtn.disabled = false;
  }
}
function operate() {
  while (equation.includes('*')) {
    i = equation.indexOf('*');
    result = multiply(equation[i - 1], equation[i + 1]);
    equation.splice(i - 1, 3, result);
  }
  while (equation.includes('/')) {
    i = equation.indexOf('/');
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
      backspaceBtnAction()
    } else if (btn.textContent === '=') {
      equalBtnAction();
    } else {
      equation[equation.length] = Number(output.textContent);
      equation[equation.length] = btn.textContent;
      clearOutput();
    }
  })
})
document.addEventListener('keydown', (e) => {
  btns.forEach((btn) => {
    if (btn.textContent === e.key) {
      btn.classList.toggle('pressed');
      if (!isNaN(parseInt(btn.textContent))) {
        output.textContent += btn.textContent;
      } else if (btn.textContent === '.') {
        output.textContent += btn.textContent;
        pointBtn.disabled = true;
      } else if (btn.textContent === 'AC') {
        clearOutput();
        equation = [];
      } else if (btn.textContent === '=') {
        equalBtnAction()
      } else {
        equation[equation.length] = Number(output.textContent);
        equation[equation.length] = btn.textContent;
        clearOutput();
      }
    }
  })
  if (e.key === 'Backspace') {
    backspaceBtn.classList.toggle('pressed')
    backspaceBtnAction();
  } else if (e.key === 'Enter') {
    equalBtn.classList.toggle('pressed');
    equalBtnAction();
  }
})
document.addEventListener('keyup', (e) => {
  btns.forEach((btn) => {
    if (btn.textContent === e.key) {
      btn.classList.toggle('pressed');
    }
  })
  if (e.key === 'Backspace') {
    backspaceBtn.classList.toggle('pressed');
  } else if (e.key === 'Enter') {
    equalBtn.classList.toggle('pressed');
  }
})