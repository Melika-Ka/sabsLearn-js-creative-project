let textSearch = document.querySelector("#text-to-search");
let searchBtn = document.querySelector(".searchBtn");
let paragraph = document.querySelector("#paragraph");

const findCharHandler = () => {
  let searchText = textSearch.value;
  let regexText = new RegExp(`${searchText}`, "g");
  console.log(regexText);

  paragraph.innerHTML = paragraph.textContent.replace(
    regexText,
    (item) => `<mark>${item}</mark>`
  );
};
searchBtn.addEventListener("click", findCharHandler);
