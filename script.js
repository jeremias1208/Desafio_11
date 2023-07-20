//Variáveis
const emailInput = document.getElementById('email');
const emailWarning = document.getElementById('warning');

//função
emailInput.addEventListener('input',() => {
  const email = emailInput.value;
  const emailRegax = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i // Expressão regular para validar o email
  if(!emailRegax.test(email)){
    emailWarning.style.display = 'block';
      } else{
        emailWarning.style.display ='none';
      }
})
