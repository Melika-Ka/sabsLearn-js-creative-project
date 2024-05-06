// tags = ["Sabzlearn", "JS"];
let tags = [];
let tagInput = document.querySelector(".tag-input");
let tagCountSpan = document.querySelector(".details-count");
let removeAllBtn = document.querySelector(".details button");
let tagContent = document.querySelector(".content ul");
const writeTag = (newTag) => {
  for (i = 0; i < newTag.length; i++) {
    tags.push(newTag[i]);

    let li = document.createElement("li");
    li.innerHTML = newTag[i];
    let icon = document.createElement("i");
    icon.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    icon.className = "fa fa-close";
    li.append(icon);
    tagContent.insertAdjacentElement("afterbegin", li);
  }
  tagsCount = 10 - tags.length;
  tagCountSpan.innerHTML = tagsCount;
  tagInput.value = "";
};
const addTagsHandler = (event) => {
  if (event.keyCode == 13) {
    if (tags.length >= 10) {
      return false;
    } else {
      let newTag = event.target.value.split(",");
      writeTag(newTag);
    }
  }
};

tagInput.addEventListener("keyup", (e) => {
  addTagsHandler(e);
});

removeAllBtn.addEventListener("click", () => {
  tags = [];
  let liTags = document.querySelectorAll("li");
  liTags.forEach((liTag) => {
    liTag.remove();
  });
});
