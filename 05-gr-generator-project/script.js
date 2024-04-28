let body = document.querySelector("body");
let firstColor = document.querySelector("#color-a");
let secondColor = document.querySelector("#color-b");
let buttons = document.querySelectorAll(".buttons button");
let submitGenerator = document.querySelector("#submit");
let codeText = document.querySelector("#code");
let copyBtn = document.querySelector("#copy");
let direction = "bottom";

const generatHandler = () => {
  body.style.backgroundImage = `linear-gradient(to ${direction},${firstColor.value},${secondColor.value})`;
  let codeGenerate = `background : linear-gradient(to ${direction} , ${firstColor.value} , ${secondColor.value})`;
  codeText.value = codeGenerate;
};
const clickHandler = (clickButton) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  if (clickButton.target.tagName == "BUTTON") {
    clickButton.target.classList.add("active");
  } else if (clickButton.target.tagName == "I") {
    clickButton.target.parentNode.classList.add("active");
  }
  direction = clickButton.target.dataset.direction;
};

buttons.forEach((element) => {
  element.addEventListener("click", (element) => {
    clickHandler(element);
  });
});
copyBtn.addEventListener("click", () => {
  // Copy the text inside the text field
  navigator.clipboard.writeText(codeText.value);
  // Alert the copied text
  alert("Copied the text: \n" + codeText.value);
});
submitGenerator.addEventListener("click", () => {
  generatHandler();
});

generatHandler();
