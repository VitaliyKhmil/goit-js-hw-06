function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changecolorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function onChangeColor(event){
  document.body.style.backgroundColor = getRandomHexColor();  
  spanColor.textContent = document.body.style.backgroundColor; 
} 

changecolorBtn.addEventListener(`click`, onChangeColor)
