let userWrap = document.querySelector(".users-wrap");
window.addEventListener("load", () => {
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
                  <button class="user-edit-btn">edit</button>
                  <!-- ! ----------------------------- remove btn ------------------------------ ! -->
                  <button class="user-remove-btn">remove</button>
                </div>
              </div>`
        );
      });
    });
});
