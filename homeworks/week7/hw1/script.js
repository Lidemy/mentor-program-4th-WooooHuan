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
    inputHint.style.display = legal ? 'none' : 'block';
    return legal;
  } return true;
}

function checkFormat(rule, id) {
  const textElem = document.querySelector(id);
  if (textElem.value.length < 1) return false;
  const hint = getChildElem(textElem.parentNode, 'format-hint');
  const legal = rule.test(textElem.value);
  hint.style.display = legal ? 'none' : 'block';
  return legal;
}

document.querySelector('.submit-btn').addEventListener('click', () => {
  const inputElemList = document.querySelectorAll('.content-input-group');
  const result = [];
  let legal = checkFormat(/^.+@.+\./, '#email-text');
  legal = checkFormat(/^09\d{8}$/, '#phone-text') && legal;
  for (const inputElem of inputElemList) {
    legal = isLegal(inputElem) && legal;
    result.push(`${getTitle(inputElem)}：${getInputInfo(inputElem)}`);
  } if (legal) alert(result.join('\n'));
});
