let prevScrolltop = 0;
const menu = document.querySelector("header");
const hideAndShoeMenuHandler = (event) => {
  let nowScrollTop = document.documentElement.scrollTop;
  menu.classList.add("duration-200");
  if (nowScrollTop < prevScrolltop) {
    menu.classList.remove("-top-10");
    menu.classList.add("top-0");
  } else if (nowScrollTop > prevScrolltop) {
    menu.classList.add("-top-10");
    menu.classList.remove("top-0");
  }
  prevScrolltop = nowScrollTop;
};
window.addEventListener("scroll", (e) => hideAndShoeMenuHandler(e));
