let links = document.querySelectorAll("a");
let animationElement = document.querySelector(".anim");
links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    // console.log(e.target.offsetWidth);
    // console.log(e.target.offsetLeft);
    animationElement.style.width = e.target.offsetWidth + "px";
    animationElement.style.left = e.target.offsetLeft + "px";
  });
});
