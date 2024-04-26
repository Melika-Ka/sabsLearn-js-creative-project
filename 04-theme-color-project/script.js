let themesBtn = document.querySelectorAll(".themes .btn");
const clickHandler = (btn) => {
  let color = btn.target.dataset.color;
  document.documentElement.style.setProperty("--theme-color", color);
};

themesBtn.forEach((element) => {
  element.addEventListener("click", (element) => {
    clickHandler(element);
  });
});

