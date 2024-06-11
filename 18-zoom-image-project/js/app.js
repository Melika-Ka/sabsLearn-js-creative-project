let container = document.querySelector(".container");
let img = document.querySelector(".container img");
const reScaleHadler = () => {
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "50% 50%";
};
const doubleScaleHadler = (event) => {
  let xOrigin = event.clientX - event.target.offsetLeft;
  let yOrigin = event.clientY - event.target.offsetTop;
  console.log(event.clientX, event.target.offsetLeft);
  console.log(event.clientY, event.target.offsetTop);
  img.style.transform = "scale(2)";
  img.style.transformOrigin = `${xOrigin}px ${yOrigin}px`;
};
container.addEventListener("mousemove", (e) => {
  doubleScaleHadler(e);
});
container.addEventListener("mouseleave", reScaleHadler);
