const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
    
function onFormSubmit(event) {  event.preventDefault();   
   const {elements: { email, password },} = event.currentTarget;  
   if (email.value === "" || password.value === "") 
   { alert ('Все поля должны быть заполнены')};
const userRegister = {}; 
userRegister.email = email.value,      
  userRegister.password = password.value    
    console.log(userRegister);  event.currentTarget.reset();};