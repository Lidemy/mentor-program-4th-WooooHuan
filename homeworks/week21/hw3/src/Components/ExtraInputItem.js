import { useState, useEffect } from 'react';

function InputItem({ title, subTitle, updateInput }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    updateInput(title, isLegal, getValue);
  });

  function isLegal() {
    return true;
  }

  function getValue() {
    return value;
  }

  return (
    <div className="content-input-group content-extra">
      <div className="input-title">{title}</div>
      <div className="input-extra-info">{subTitle}</div>
      <input
        className="input-text"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="您的回答"
      ></input>
    </div>
  );
}

export default InputItem;
