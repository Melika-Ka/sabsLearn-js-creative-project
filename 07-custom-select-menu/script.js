let selectBtn = document.querySelector(".select-btn");
let selectText = document.querySelector(".select-btn span");
let wrapper = document.querySelector(".wrapper");
let optionsUl = document.querySelector(".options");
let searchInput = document.querySelector(".search input");
let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];
const selectCountryHandler = (countryLi) => {
  selectText.innerHTML = countryLi.target.innerHTML;
  wrapper.classList.remove("active");
};
const setItems = (countriesList) => {
  optionsUl.innerHTML = "";
  countriesList.forEach((country) => {
    let liCountry = document.createElement("li");
    liCountry.innerHTML = country;
    optionsUl.appendChild(liCountry);
    liCountry.addEventListener("click", (e) => {
      selectCountryHandler(e);
    });
  });
};
const selectBtnClickHandler = () => {
  wrapper.classList.toggle("active");
};
const searchingHandler = (searchItem) => {
  searchItem = searchItem.target.value.toLowerCase();
  let filterCountry = countries.filter((country) => {
    return country.toLowerCase().startsWith(searchItem);
  });
  setItems(filterCountry);
};
window.addEventListener("load", () => {
  setItems(countries);
});
selectBtn.addEventListener("click", selectBtnClickHandler);
searchInput.addEventListener("keyup", (e) => {
  searchingHandler(e);
});
