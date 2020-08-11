const nickNameText = "nickname-text";
const emailText = "email-text";
const phoneText = "phone-text";
const signUpType = "sign-up-type";
const knowsText = "knows-text";
const extraText = "extra-text";
const necessaryHint = "此處為必填欄位！";
let result = "";

document.querySelector("button").addEventListener("click", onClicked);

function onClicked() {
  const inputList = document.querySelectorAll(".content-input-group")
  for (input of inputList) {
    const title = input.getElementFromChild(input, "input-title", true);
    
    const inputElement = getElementFromChild(input, "input", false);
    result += `${getInputInfo(inputElement)}\n`;
  }
}

function getElementFromChild (element, name, byClassName) {
  for (node in element.childNodes) {
    if (byClassName ? node.className : node.tagName === name) return node;
  }
}

function Temp () {
  const textElements = document.querySelectorAll(".input-text");
  for (element of textElements) {
    if (element.value.length > 0) {

    } else {
      showNecessaryHint(element);
    }
  }
}

function getInputText (name) {
  const inputTextList = document.querySelectorAll(".input-text");
  for (inputText of inputTextList) {
    if (inputText.name === name) return inputText.value;
  }
}

function getInputInfo (inputElement) {

  switch (inputElement.type) {
    case "text" :
      
      break;
    case "radio" : 
      ;
      break;
    default : console.log("somthing bad happened :(");
  }
}


function showNecessaryHint (element) {
  const nodes = element.parentNode.childNodes;
  for (node of nodes) {
    if (node.className === "input-hint") node.innerText = necessaryHint;
  }
}