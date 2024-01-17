var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

//Error function
function errorHandler(error) {
  console.log("error occured", error);
}

function clickHandler() {
  //outputDiv.innerText ="asdfklsfnmldskd " + txtInput.value
  var inputedText = txtInput.value;

  //Calling server for processing
  fetch(getTranslationURL(inputedText))
    .then((response) => response.json())
    .then((json) => {
        var teanslatedText = json.contents.translated
      outputDiv.innerText = teanslatedText;
      //console.log(json.contents.translated)
      //get to knoe from console
    })
    //to handle error
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
