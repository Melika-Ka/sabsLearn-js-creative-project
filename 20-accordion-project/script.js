let wrappers = document.querySelectorAll(".wrapper");
let isOpen = false;
const closeAllWrappers = () => {
  wrappers.forEach((wrapper) => {
    wrapper.children[1].style.height = 0 + "px";
    wrapper.children[0].children[0].className = "fas fa-plus icon";
    wrapper.children[0].style.color = "black";
  });
};
wrappers.forEach((wrapper) => {
  let isOpen = false;
  wrapper.addEventListener("click", (e) => {
    //   console.log(wrapper.children[0].children[0]);
    if (!isOpen) {
      closeAllWrappers();
      let height = wrapper.children[1].scrollHeight;
      wrapper.children[0].style.color = "#0084e9";
      wrapper.children[0].children[0].className = "fas fa-minus icon";
      wrapper.children[1].style.height = height + "px";
      isOpen = true;
    } else {
      closeAllWrappers();
      isOpen = false;
    }
  });
});
