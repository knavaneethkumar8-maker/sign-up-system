console.log('chack');

const continueButton = document.querySelector('.js-continue-button');
const emailInput = document.querySelector('.js-email-input');

continueButton.addEventListener('click', async () => {
  console.log('sign in');
  const input = emailInput.value;
  if(input) {
    console.log(input);
    emailInput.value = '';
    const result = await fetch('http://localhost:3500/register', {
      credentials : 'include',
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : {
        "username" : "Vetrimaran",
        "email" : "nithinvenkatesh@gmail.com",
        "pwd" : "222"
      }
    }).then((response) => {
      return response.json();
    }).catch((err) => {
      console.log(err);
    });
    console.log(`successfully fetched : ${ result}`);
  } else {
    console.log('please enter email');
  }
  
});