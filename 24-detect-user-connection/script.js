let wrapper = document.querySelector(".wrapper");
let toast = document.querySelector(".wrapper .toast");
let details = document.querySelector(".details");
let onlineOrOffline = document.querySelector(".details span");
let onlineOrOfflinepassage = document.querySelector(".details p");
let closeShow = document.querySelector(".close-icon");
let icon = document.querySelector(".icon");

const closeShowConnectionBox = () => {
  wrapper.classList.add("hide");
};
const onlineHandler = () => {
  onlineOrOffline.innerHTML = "You're online now";
  onlineOrOfflinepassage = "Hurray! Internet is connected.";
  icon.innerHTML = `<i class="uil uil-wifi"></i>`;
  toast.classList.remove("offline");
};
const offlineHandler = () => {
  wrapper.classList.remove("hide");
  onlineOrOffline.innerHTML = "You're offline now";
  onlineOrOfflinepassage = "Sorry! Internet is disconnected.";
  icon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  toast.classList.add("offline");
};

const showConnection = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (response.status === 200 || response.status < 300) {
        onlineHandler();
      } else {
        offlineHandler();
      }
      closeShow.addEventListener("click", () => {
        closeShowConnectionBox();
      });
    })
    .then()
    .catch(() => offlineHandler());
};

setInterval(() => showConnection(), 1000);
