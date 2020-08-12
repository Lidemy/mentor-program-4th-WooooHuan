function getChildElem(element, className) {
  for (const node of element.childNodes) {
    if (node.className === className) return node;
  }
}

function getTitle(element) {
  return getChildElem(element, 'input-title').innerText.split(' ')[0];
}

function getRadioInfo() {
  const radioList = document.querySelectorAll('.input-radio');
  for (const radio of radioList) {
    if (radio.checked) return radio.parentNode.innerText.trim();
  }
}

function getInputInfo(element) {
  const inputTextElement = getChildElem(element, 'input-text');
  return inputTextElement ? inputTextElement.value : getRadioInfo();
}

function isLegal(element) {
  const legal = getInputInfo(element).length > 0;
  const inputHint = getChildElem(element, 'input-hint');
  if (inputHint) {
    const hintIcon = getChildElem(inputHint, 'hint-icon');
    const hintText = getChildElem(inputHint, 'hint-text');
    hintIcon.style.display = legal ? 'none' : 'inline-block';
    hintText.innerText = legal ? '' : '這是必填問題';
    return legal;
  } return true;
}

document.querySelector('.submit-btn').addEventListener('click', () => {
  const inputList = document.querySelectorAll('.content-input-group');
  const result = [];
  let legal = true;
  for (const input of inputList) {
    legal = isLegal(input) && legal;
    result.push(`${getTitle(input)}：${getInputInfo(input)}`);
  }
  if (legal) alert(result.join('\n'));
});
