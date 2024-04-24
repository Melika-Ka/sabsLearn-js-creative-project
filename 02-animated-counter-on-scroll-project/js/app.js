let benefits = document.querySelector(".benefits");
let numElements = document.querySelectorAll(".num");
let isSarted = false;
const setCounter = (element) => {
  //   console.log(element.dataset.range);
  //   console.log(element.innerHTML);
  let counterInterval = setInterval(() => {
    if (element.innerHTML == element.dataset.range) {
      clearInterval(counterInterval);
    }
    element.innerHTML = +element.innerHTML + 1;
  }, 10);
};
const screenScrollHandler = () => {
  //   console.log(
  //     benefits.offsetTop,
  //     " <= offsetTop",
  //     window.scrollY,
  //     " <= scrollY"
  //   );
  if (benefits.offsetTop >= window.scrollY) {
    if (!isSarted) {
      numElements.forEach((element) => {
        setCounter(element);
      });
    }
    isSarted = true;
  }
};

window.addEventListener("scroll", screenScrollHandler);
