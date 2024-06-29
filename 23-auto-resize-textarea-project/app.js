let textArea = document.querySelector("#text-area");

textArea.addEventListener("input", (e) => {
  textArea.style.height = "auto";
  let textHeight = textArea.scrollHeight;
  textArea.style.height = textHeight + "px";
});
