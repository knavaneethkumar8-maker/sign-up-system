console.log('chack');

const continueButton = document.querySelector('.js-continue-button');
const emailInput = document.querySelector('.js-email-input');

continueButton.addEventListener('click', async () => {
  console.log('sign in');
  const input = emailInput.value;
  if(input) {
    console.log(input);
    emailInput.value = '';
    const result = await fetch('http://localhost:3500/index')
                    .then((response) => {
                      return response.text()
                    });
    console.log(`successfully fetched : ${ result}`);
  } else {
    console.log('please enter email');
  }
  
});