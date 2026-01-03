console.log('chack');

const continueButton = document.querySelector('.js-continue-button');
const emailInput = document.querySelector('.js-email-input');
const passwordInput = document.querySelector('.js-password-input');
const statusMessage = document.querySelector('.js-status-message');
const displayResponse = document.querySelector('.js-response');
let accessToken;
let emailError;

function  checkEmailValidity(input) {
  const validEmail = input.endsWith('@gmail.com') || input.endsWith('@yahoo.com') || input.endsWith('@microsoft.com');
  if(!validEmail) {
    emailError = {
      message : "Not a valid Email"
    }
    console.log(validEmail,input, emailError);
    return false;
  }

  console.log(input);
  return true;
}

continueButton.addEventListener('click', async () => {
  console.log('sign in');
  const email = emailInput.value;
  const password = passwordInput.value;
  const validEmail = checkEmailValidity(email);
  if(!validEmail) {
    statusMessage.innerText = emailError.message;
    statusMessage.classList.remove('hide');
    emailInput.classList.add('input-error');
    return console.log(emailError.message);
  }
  if(!password) {
    emailInput.classList.remove('input-error');
    passwordInput.classList.add('input-error');
    statusMessage.innerText = 'Pleae enter password';
    statusMessage.classList.remove('hide');
    return console.log("Please enter password");
  }
  if(validEmail) {
    console.log(email);
    emailInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
    try {
      const response = await fetch('http://localhost:3500/auth', {
        credentials : 'include',
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          "username" : "chiru",
          "email" : `${email}`,
          "pwd" : `${password}`
        })
      });
      const loginSuccess = response.ok;
      console.log(loginSuccess);
      const result = await response.json();
      console.log(result);
      if(!loginSuccess) {
        statusMessage.innerText = result.message;
        statusMessage.classList.remove('hide');
        displayResponse.innerText = result.message;
        return console.log(`response message : ${result.message}`);
      }
      emailInput.value = '';
      passwordInput.value = '';
      statusMessage.classList.add('hide');
      accessToken = result.accessToken;
      displayResponse.innerText = `${result.message} \n ${accessToken}`;
      console.log(`response message : ${result.message}`, accessToken );

    }catch (err) {
      console.log("error occured");
      console.log(err.message);
    }
    
    
  } else {
    console.log('please enter email');
  }
  
});