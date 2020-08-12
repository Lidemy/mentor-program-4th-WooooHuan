document.querySelector(".submit-btn").addEventListener("click", onClicked);

function onClicked() {
  const inputList = document.querySelectorAll(".content-input-group")
  const result = [];
  let legal = true;
  for (input of inputList) {
    const title = getTitle(getElementFromChildByClass(input, "input-title"));
    const inputTextElement = getElementFromChildByClass(input, "input-text");
    const inputInfo = getInputInfo(inputTextElement);
    const inputHint =  getElementFromChildByClass(input, "input-hint");
    if (inputHint) inputHint.innerText = inputInfo.length > 0 ? "" : "這是必填問題！";
    result.push(`${title}：${inputInfo}`);
    legal = legal && inputInfo.length > 0;
  } if (legal) alert(result.join("\n"));
}

function getElementFromChildByClass (element, className) {
  for (node of element.childNodes) {
    if (node.className === className) return node;
  }
}

function getTitle (element) {
  return element.innerText.split(" ")[0];
}

function getInputInfo (inputTextElement) {
  if (inputTextElement) {
    return inputTextElement.value;
  } else {
    const radioList = document.querySelectorAll(".input-radio");
    for (radio of radioList) {
      if (radio.checked) return radio.parentNode.innerText.trim();
    }
  }
}