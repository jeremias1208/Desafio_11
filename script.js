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
});
const login = document.getElementById('login');

login.addEventListener('submit', function(event){
  event.preventDefault();

   const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
     const email = emailInput.value; 
     const senha = senhaInput.value
  if( email === "jeremiasevaristo333@gmail.com" && senha === "123456"){
    window.location.href = 'https://github.com/jeremias1208/Desafio_11';
  }else{
    alert('Email ou senha inválidos. Por favor, tente novamente,');
    emailInput.value ='';
    senhaInput.value ='';
  }
  
 });



