let lefteye = document.querySelector("#lefteye");
let righteye = document.querySelector("#righteye");
let userInput = document.querySelector("#userInput");
let passInput = document.querySelector("#passInput");
let i = 0;
const InputBlur = () => {
  lefteye.style.transform = "translate(0 ,0)";
  righteye.style.transform = "translate(0 ,0)";
};

const userInputFocusHandler = () => {
  lefteye.style.transform = "translate(-6px ,11px)";
  righteye.style.transform = "translate(-6px ,11px)";
};
const passInputFocusHandler = () => {
  lefteye.style.transform = "translate(9px ,-15px)";
  righteye.style.transform = "translate(-9px ,-15px)";
};
const userInputKeydownHandler = (e) => {
  if (e.key == "Backspace") {
    if (i <= 0) {
      return false;
    } else {
      i -= 0.2;
      lefteye.style.transform = `translate(${-6 + i}px ,11px)`;
      righteye.style.transform = `translate(${-6 + i}px ,11px)`;
    }
  } else {
    i += 0.25;
    if (i >= 11) {
      lefteye.style.transform = `translate(+6px ,11px)`;
      righteye.style.transform = `translate(+6px ,11px)`;
    } else {
      lefteye.style.transform = `translate(${-6 + i}px ,11px)`;
      righteye.style.transform = `translate(${-6 + i}px ,11px)`;
    }
  }
  // console.log(i);
};
userInput.addEventListener("keydown", userInputKeydownHandler);
userInput.addEventListener("focus", userInputFocusHandler);
passInput.addEventListener("focus", passInputFocusHandler);
userInput.addEventListener("blur", InputBlur);
passInput.addEventListener("blur", InputBlur);
