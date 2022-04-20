// рандом-колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// додавання
const createBtn = document.querySelector("button[data-create]");

const createBtnHandler = function () {
  const amount = Number(document.querySelector("input").value);
  if (amount > 0 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  } else {
    console.log("Please enter correct number!!!");
  }
};
createBtn.addEventListener("click", createBtnHandler);

function createBoxes(amount) {
  const nodes = [];

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${i * 10 + 30}px`;
    newDiv.style.height = `${i * 10 + 30}px`;
    newDiv.style.background = getRandomHexColor();
    nodes.push(newDiv);
  };

  document.getElementById("boxes").append(...nodes);
};

// видаллення
const destroyBtn = document.querySelector("button[data-destroy]");

const destroyBtnHandler = function () {
  destroyBoxes();
};
destroyBtn.addEventListener("click", destroyBtnHandler);

function destroyBoxes() {
  document.getElementById("boxes").replaceChildren();
}
