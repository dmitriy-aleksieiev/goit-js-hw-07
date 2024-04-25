const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="email"]').value.trim();
  const passwordInput = document
    .querySelector('input[name="password"]')
    .value.trim();

  if (emailInput === '' || passwordInput === '') {
    alert('All form fields must be filled in');
  } else {
    {
      console.log(`{
      email: ${emailInput},
      password: ${passwordInput}
    }`);
      event.currentTarget.reset();
    }
  }
}
