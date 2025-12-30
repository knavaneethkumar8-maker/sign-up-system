console.log('chack');

const continueButton = document.querySelector('.js-continue-button');
const emailInput = document.querySelector('.js-email-input');

continueButton.addEventListener('click', () => {
  console.log('sign in');
  const input = emailInput.value;
  console.log(input);
});