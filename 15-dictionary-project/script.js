let resultContainer = document.querySelector(".result");
let errorResult = document.querySelector(".error");
let inpWord = document.querySelector("#inp-word");
let searchBtn = document.querySelector("#search-btn");
let word = document.querySelector(".word h3");
let volume = document.querySelector(".fa-volume-up");
let audio = document.querySelector("#audio");
let partOfSpeech = document.querySelector(".partOfSpeech");
let phonetic = document.querySelector(".phonetic");
let meaning = document.querySelector(".word-meaning");
let example = document.querySelector(".word-example");
const dicApihandler = () => {
  let searchWord = inpWord.value;
  console.log(searchWord);
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return new Error("Invalid");
      }
    })
    .then((result) => {
      console.log(result[0]);
      resultContainer.style.display = "block";
      errorResult.style.display = "none";
      word.innerHTML = result[0].word;
      phonetic.innerHTML = result[0].phonetic;
      partOfSpeech.innerHTML = result[0].meanings[0].partOfSpeech;
      meaning.innerHTML = result[0].meanings[0].definitions[0].definition;
      example.innerHTML = result[0].meanings[0].definitions[0].example;
      audio.setAttribute("src", result[0].phonetics[0].audio);
      volume.addEventListener("click", () => {
        audio.play();
      });
    })
    .catch((erorr) => {
      resultContainer.style.display = "none";
      errorResult.style.display = "block";

      errorResult.innerHTML = "Not Found";
      console.log("Error: " + erorr);
    });
};
searchBtn.addEventListener("click", () => {
  dicApihandler();
});
