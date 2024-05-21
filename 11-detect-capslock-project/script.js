let passwordInput = document.querySelector("#password");
let warningInput = document.querySelector("#warning");
const capsLockChangingHandler = (event) => {
  if (event.getModifierState("CapsLock")) {
    warningInput.style.display = "block";
  } else {
    warningInput.style.display = "none";
  }
};
passwordInput.addEventListener("keydown", (e) => {
  capsLockChangingHandler(e);
});
