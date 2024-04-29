faceBtn = document.querySelector("#face-btn");
colorBtn = document.querySelector("#color-btn");
hornsBtn = document.querySelector("#horns-btn");
tailsBtn = document.querySelector("#tail-btn");
root = document.querySelector(":root");

faceCount = 0;
hornsCount = 0;
tailCount = 0;
bodyCount = 0;

let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
let hornsTailColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
  "transparent",
];

const faceClickHandler = () => {
  faceCount++;
  if (faceCount >= 6) {
    faceCount = 0;
  }
  face.src = `face-${faceCount}.png`;
};
const hornsClickHandler = () => {
  hornsCount++;
  if (hornsCount >= hornsTailColors.length) {
    hornsCount = 0;
  }
  root.style.setProperty("--color-horns", hornsTailColors[hornsCount]);
};
const colorClickHandler = () => {
  bodyCount++;
  if (bodyCount >= bodyColors.length) {
    bodyCount = 0;
  }
  root.style.setProperty("--color-character", bodyColors[bodyCount]);
};
const tailClickHandler = () => {
  tailCount++;
  if (tailCount >= hornsTailColors.length) {
    tailCount = 0;
  }
  root.style.setProperty("--color-tail", hornsTailColors[tailCount]);
};

faceBtn.addEventListener("click", faceClickHandler);
colorBtn.addEventListener("click", colorClickHandler);
hornsBtn.addEventListener("click", hornsClickHandler);
tailsBtn.addEventListener("click", tailClickHandler);
