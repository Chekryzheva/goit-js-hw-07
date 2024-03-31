const inputElement = document.getElementById("elementCountInput");
const createButton = document.getElementById("createButton");
const destroyButton = document.getElementById("destroyButton");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputElement.value;
  if (amount < 1 || amount > 100) {
    console.log("Please enter a number between 1 and 100.");
    return;
  }

  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = ""; // Очищаємо попередні елементи

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    boxesDiv.appendChild(box);

    width += 10;
    height += 10;
  }

  inputElement.value = ""; // Очищаємо значення input
}

function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = ""; // Очищаємо всі елементи
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
