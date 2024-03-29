// NOTE: 
// This is the final source code file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-2

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const calculate = (n1, operator, n2) => {
  let result = '';
  const display_operator = calculator.dataset.display_small_operator;
  if (operator === 'add') {
    display_small_operator = "+";
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    display_small_operator = "-";
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === 'multiply') {
    display_small_operator = "*";
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    display_small_operator = "/";
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result.toFixed(2);
}


const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const display_small = calculator.querySelector('.calculator__display__small');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'));

    if (!action) {
      if (
        displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = keyContent;
        display_small.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
        display_small.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = 'number';
    }

    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      } else if (
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = '0.';
      }

      calculator.dataset.previousKeyType = 'decimal';
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (
        firstValue &&
        operator &&
        previousKeyType !== 'operator' &&
        previousKeyType !== 'calculate'
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.operator = action;
      if (action === "add") {
        display_small_operator = "+";
      }
      if (action === "subtract") {
        display_small_operator = "-";
      }
      if (action === "multiply") {
        display_small_operator = "*";
      }
      if (action === "divide") {
        display_small_operator = "/";
      }
      display_small.textContent = displayedNum + display_small_operator;
    }
    if (action === 'clear') {
      if (key.textContent === 'AC') {
        calculator.dataset.firstValue = '';
        calculator.dataset.modValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
        display_small.textContent = "";
      } else {
        key.textContent = 'AC';
      }
      display.textContent = 0;
      calculator.dataset.previousKeyType = 'clear';
    }
    if (action === 'calculate') {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayedNum;
      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }

        display.textContent = calculate(firstValue, operator, secondValue);

      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'calculate';
      display_small.textContent = firstValue + display_small_operator + secondValue + " = ";
    }
  }
})



