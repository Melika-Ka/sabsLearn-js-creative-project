let userWrap = document.querySelector(".users-wrap");
let removeModal = document.querySelector(".remove-modal");
let editModal = document.querySelector(".edit-modal");
let mainUserId = null;
let userNameInput = document.querySelector("#username-input");
let firstNameInput = document.querySelector("#first-name-input");
let lastNameInput = document.querySelector("#first-name-input");
window.addEventListener("load", () => {
  getAllUsers();
});

function getAllUsers() {
  fetch("http://localhost:3000/api/users/", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      userWrap.innerHTML = "";
      data.forEach((eachUser) => {
        userWrap.insertAdjacentHTML(
          "beforeend",
          ` <div class="user-box">
                    <div class="user-box_left">
                      <img
                        src=${eachUser.profile}
                        class="user-profile-box"
                        alt=""
                      />
                      <div class="user-detail">
                        <h1 class="user-id">
                          <span
                            >${eachUser.userName}</span
                            <!-- username -->
                          </span>
                          <span class="user-history">
                           ${eachUser.created_AT}
                            <!-- history -->
                          </span>
                        </h1>
                        <h3 class="user-name">
                          ${eachUser.firstName}  ${eachUser.lastName} 
                          <!-- user name (first name and last name) -->
                        </h3>
                      </div>
                    </div>
    
                    <div class="user-btns-group">
                      <!-- ! ------------------------------ edit btn ------------------------------- ! -->
                      <button onclick="showEditModal('${eachUser._id}')" class="user-edit-btn">edit</button>
                      <!-- ! ----------------------------- remove btn ------------------------------ ! -->
                      <button onclick="showRemoveModal('${eachUser._id}')" class="user-remove-btn">remove</button>
                    </div>
                </div>`
        );
      });
    });
}

/// remove User functions

function showRemoveModal(userID) {
  mainUserId = userID;
  removeModal.classList.add("visible");
  console.log(userID);
}
function closeModal() {
  removeModal.classList.remove("visible");
}
function removeUser() {
  fetch(`http://localhost:3000/api/users/${mainUserId}`, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    closeModal();
    getAllUsers();
  });
}
/// Edit User functions
function showEditModal(userID) {
  mainUserId = userID;
  editModal.classList.add("visible");
}
function editUser(event) {
  event.preventDefault();
  console.log(mainUserId);
  let user = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    userName: userNameInput.value,
    profile: "content/img/profile/banana.png",
  };
  fetch(`http://localhost:3000/api/users/${mainUserId}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => {
    console.log(result);
    removeEditModal();
    getAllUsers();
    emptyEditInput();
  });
}

function removeEditModal() {
  editModal.classList.remove("visible");
}

function emptyEditInput() {
  userNameInput.value = "";
  firstNameInput.value = "";
  lastNameInput.value = "";
}
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    removeEditModal();
  }
});
