const spanName = document.getElementById(`name-output`);
const input = document.getElementById(`name-input`);


input.addEventListener(`input`, onInputChange)

function onInputChange(event){
    spanName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ""){
       spanName.textContent = "Anonymous";
    }
        console.log(event.currentTarget.value);
}











// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>