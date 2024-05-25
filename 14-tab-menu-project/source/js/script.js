let wrapper = document.querySelector(".wrapper");
let tabBtns = document.querySelectorAll(".tab-button");
let contents = document.querySelectorAll(".content");

wrapper.addEventListener("click", (e) => {
  tabBtns.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  let contentId = e.target.dataset.id;
  contents.forEach((content) => content.classList.remove("active"));
  document.getElementById(contentId).classList.add("active");
});
