document.querySelector("button").addEventListener("click", onClicked);

function onClicked() {
  alert(getInputText("nickmane-text"));
}

function getInputText (name) {
  const inputTextList = document.querySelectorAll(".input-text");
  for (inputText of inputTextList) {
    if (inputText.name == name) return inputText.value;
  } return undefined;
}