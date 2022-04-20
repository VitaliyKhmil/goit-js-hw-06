const input = document.getElementById(`font-size-control`);
const span = document.getElementById(`text`);



input.addEventListener("input", 
function() {            
  text.style.fontSize = input.value + 'px';           
});

