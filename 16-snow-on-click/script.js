body.addEventListener("click", (e) => {
  let snowElement = document.createElement("span");
  let snowElementSize = Math.floor(Math.random() * 50);
  snowElement.className = "snowflake";
  snowElement.style.top = e.offsetY + "px";
  snowElement.style.left = e.offsetX + "px";
  snowElement.style.width = snowElementSize + "px";
  snowElement.style.height = snowElementSize + "px";
  document.body.append(snowElement);
  setTimeout(() => {
    snowElement.remove();
  }, 1000);
});