function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  if (inputNumberEl.value >= 1 && inputNumberEl.value <= 100) {
    boxesContainer.innerHTML = '';

    for (let i = 0; i < inputNumberEl.value; i++) {
      const size = 30 + i * 10;
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      // boxesContainer.style.marginTop = '10px';
      // boxesContainer.style.display = 'flex';
      // boxesContainer.style.gap = '32px';
      // boxesContainer.style.flexWrap = 'wrap';
      boxesContainer.appendChild(box);
    }

    inputNumberEl.value = '';
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
