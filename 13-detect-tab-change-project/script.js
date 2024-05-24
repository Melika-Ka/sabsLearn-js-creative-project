let changeTab = document.querySelector(".pass");
const changeTabHandler = () => {
  if (document.visibilityState == "hidden") {
    changeTab.innerHTML = "(Faild)";
    changeTab.classList.add("faild");
    document.title = "InActive";
  } else {
    document.title = "Active";
  }
};
document.addEventListener("visibilitychange", changeTabHandler);
