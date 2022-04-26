const destroyBtn = document.querySelector("button[data-destroy]");
const createBtn = document.querySelector("button[data-create]");
const boxesNode = document.getElementById("boxes");
let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const nodes = [];

  for (let i = 0; i < amount; i++) {
	    const newDiv = document.createElement("div");
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.background = getRandomHexColor();
    nodes.push(newDiv);
    size += 10;
  }
  boxesNode.append(...nodes);
}

createBtn.addEventListener("click", function () {
  const amount = Number(document.querySelector("input").value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert ("Please enter correct number 0 - 100!!!");
  }
});

destroyBtn.addEventListener("click", function () {
  size = 30;
	boxesNode.replaceChildren();
});
