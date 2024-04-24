let menuTags = document.querySelectorAll(".menu a");
let toggleBtn = document.querySelector("#toggle-btn");
let isOpen = false;
const toggleBtnClickHandler = () => {
  if (isOpen) {
    isOpen = false;
    toggleBtn.classList.remove("active");
    menuTags.forEach((element) => {
      element.style.transform = "translate(0,0)";
    });
  } else {
    isOpen = true;
    toggleBtn.classList.add("active");
    menuTags[0].style.transform = "translate(150px,0)";
    menuTags[1].style.transform = "translate(150px,90px)";
    menuTags[2].style.transform = "translate(0,150px)";
    menuTags[3].style.transform = "translate(90px,150px)";
  }
};
toggleBtn.addEventListener("click", toggleBtnClickHandler);
