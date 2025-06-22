let currentInput = "";


const input = document.querySelector('.input');


const numberButtons = document.querySelectorAll('.no');
const operatorButtons = document.querySelectorAll('.sign');
const enterButton = document.querySelector('.enter');


function updateDisplay() {
  input.value = currentInput;
}


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.textContent;
    updateDisplay();
  });
});


operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const symbol = button.textContent;

    if (symbol === 'AC') {
      currentInput = ""; // Reset state
    } else {
      currentInput += symbol; // Append operator
    }

    updateDisplay();
  });
});


function calculate() {
  try {
    // eval evaluates the string math expression
    currentInput = eval(currentInput).toString(); 
    updateDisplay();
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
}

enterButton.addEventListener('click', calculate);

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/[0-9+\-*/.]/.test(key)) {
    currentInput += key;
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault(); // avoid form submission
    calculate();
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (key === 'Escape') {
    currentInput = "";
  }

  updateDisplay();
});

