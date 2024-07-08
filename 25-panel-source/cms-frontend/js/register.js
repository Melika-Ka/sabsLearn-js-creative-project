let submitBtn = document.querySelector("#submit-btn");

let firstnameInput = document.querySelector("#firstname-input");
let lastnameInput = document.querySelector("#lastname-input");
let usernameInput = document.querySelector("#username-input");

let firstnameMessage = document.querySelector("#firstname-message");
let lastnameMessage = document.querySelector("#lastname-message");
let usernameMessage = document.querySelector("#username-message");

let firstnameValid,
  lastnameValid,
  usernameValid = null;

firstnameInput.addEventListener("keyup", (event) => {
  if (event.target.value.length < 3) {
    firstnameMessage.innerHTML = "invlaid ";
    firstnameMessage.classList.remove("valid-message");
    firstnameMessage.classList.add("invalid-message");
    firstnameValid = false;
  } else {
    firstnameMessage.innerHTML = "vlaid ";
    firstnameMessage.classList.remove("invalid-message");
    firstnameMessage.classList.add("valid-message");
    firstnameValid = true;
  }
});
lastnameInput.addEventListener("keyup", (event) => {
  if (event.target.value.length < 3) {
    lastnameMessage.innerHTML = "invlaid ";
    lastnameMessage.classList.add("invalid-message");
    lastnameMessage.classList.remove("valid-message");
    lastnameValid = false;
  } else {
    lastnameMessage.innerHTML = "vlaid ";
    lastnameMessage.classList.remove("invalid-message");
    lastnameMessage.classList.add("valid-message");
    lastnameValid = true;
  }
});
usernameInput.addEventListener("keyup", (event) => {
  if (event.target.value.length < 3) {
    usernameMessage.innerHTML = "invlaid ";
    usernameMessage.classList.remove("valid-message");
    usernameMessage.classList.add("invalid-message");
    usernameValid = false;
  } else {
    usernameMessage.innerHTML = "vlaid ";
    usernameMessage.classList.remove("invalid-message");
    usernameMessage.classList.add("valid-message");
    usernameValid = true;
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (firstnameValid && lastnameValid && usernameValid) {
    // console.log("hi fetch");
    let newUser = {
      fistName: firstnameInput.value,
      lastName: lastnameInput.value,
      userName: usernameInput.value,
      profile: "",
    };
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        console.log(response);
        resetFields();
      })
      .catch((err) => console.log(err));
  } else {
    alert("Enter Correct Informations");
  }
});

function resetFields() {
  usernameInput.innerHTML = "";
  lastnameInput.innerHTML = "";
  firstnameInput.innerHTML = "";
}
