const plusBtn = document.querySelector('[data-plus]');
const minusBtn = document.querySelector('[data-minus]');
const resetBtn = document.querySelector('[data-reset]');
const counter = document.querySelector('[data-counter]');
const alert = document.querySelector('[data-alert]');

let count = 0;

plusBtn.addEventListener('click', () => {
  count++;
  counter.innerText = count;
  console.log(count);
});

minusBtn.addEventListener('click', () => {
  count--;
  counter.innerText = count;
  console.log(count);
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.innerText = count;
  alert.show();
  console.log(count);
});
