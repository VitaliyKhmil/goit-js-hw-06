const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, onFormSubmit);


function onFormSubmit (event){
    event.preventDefault();
    
const formData = new FormData(event.currentTarget);
formData.forEach((value, name) => {
    console.log(`onFormSubmit => name`, name);
    console.log(`onFormSubmit => value`, value);
    if (name === "" || value ===""){
        alert( 'Всі поля повинні бути заповнені!!' );
    }
    event.currentTarget.reset();
});
}
