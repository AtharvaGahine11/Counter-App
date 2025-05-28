let count = 0;

const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  countEl.textContent = count;
  
  if (count > 0) {
    countEl.className = 'count positive';
  } else {
    countEl.className = 'count zero';
  }
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

updateDisplay();
