let moveBox = document.querySelector(".move-box");
let car = document.querySelector(".car");
let isLight = true;
const movingHandler = () => {
  moveBox.classList.toggle("moving-surface");
  car.classList.toggle("moving-car");
};
const lightHandler = () => {
  if (isLight) {
    car.src = "images/Img_05.png";
    isLight = false;
  } else {
    car.src = "images/Img_06.png";
    isLight = true;
  }
};
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    movingHandler();
  }
  if (e.key == "s") {
    lightHandler();
  }
});
