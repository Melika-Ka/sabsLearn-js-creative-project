let textTag = document.querySelector("#text");
let msg = "Hi everyone please tell me what to do !!!";
let index = 0;
const typeHander = () => {
  if (index < msg.length) {
    textTag.innerHTML += msg[index];
    index++;
  }
  setTimeout(() => {
    typeHander();
  }, 100);
};

typeHander();
