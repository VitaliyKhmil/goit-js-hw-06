const inputForm = document.getElementById(`validation-input`);

inputForm.addEventListener("blur", (event) => {
if (event.currentTarget.value.length === +(inputForm.dataset.length 
  )) {
    inputForm.classList.remove("invalid");
    inputForm.classList.add("valid");
  }
else {
    inputForm.classList.remove("valid");
    inputForm.classList.add("invalid");
  }
});