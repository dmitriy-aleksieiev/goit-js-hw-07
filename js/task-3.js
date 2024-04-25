const inputText = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');

inputText.addEventListener('input', onInput);

function onInput() {
  const clearInputText = inputText.value.trim();
  if (clearInputText === '') {
    outputText.textContent = 'Anonymous';
  } else {
    outputText.textContent = clearInputText;
  }
}
