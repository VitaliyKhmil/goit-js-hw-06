const inputForm = document.getElementById(`validation-input`);

inputForm.addEventListener("blur", (event) => {
if (event.currentTarget.value.length > inputForm.dataset.length ||
    event.currentTarget.value.length < inputForm.dataset.length
  ) {return inputForm.classList.add("invalid");
}
else inputForm.classList.replace("invalid", "valid");
});