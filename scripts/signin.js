console.log('chack');

const continueButton = document.querySelector('.js-continue-button');
const emailInput = document.querySelector('.js-email-input');

continueButton.addEventListener('click', async () => {
  console.log('sign in');
  const input = emailInput.value;
  if(input) {
    console.log(input);
    emailInput.value = '';
    try {
      const response = await fetch('http://localhost:3500/register', {
        credentials : 'include',
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          "username" : "charan",
          "email" : "charan@gmail.com",
          "pwd" : "222"
        })
      });
      const result = await response.json();
      console.log(`response message : ${result.message}`, result.newUser );

    }catch (err) {
      console.log(err.message);
    }
    
    
  } else {
    console.log('please enter email');
  }
  
});