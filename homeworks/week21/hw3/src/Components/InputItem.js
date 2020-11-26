import { useState, useEffect } from 'react';

function InputItem({ title, rule, updateInput }) {
  const [value, setValue] = useState('');
  const [hint, setHint] = useState('');

  useEffect(() => {
    updateInput(title, isLegal, getValue);
  })

  function isLegal() {
    if (value === '') {
      setHint('這是必填問題');
      return false;
    }
    else if (rule) {
      const result = rule.test(value);
      setHint(result ? '' : '格式錯誤');
      return result;
    }
    setHint('');
    return true;
  }

  function getValue() {
    return value;
  }

  return (
    <div className="content-input-group">
      <div className="input-title">{title}<span className="emphasize"> *</span></div>
      <input
        className="input-text"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="您的回答"
      ></input>
      { hint ? <Hint content={hint} /> : ''}
    </div>
  );
}

function Hint({ content }) {
  return <div className="input-hint">
    <span className="hint-icon">
      <div className="icon-above"></div>
      <div className="icon-below"></div>
    </span>
    <span className="hint-text">{content}</span>
  </div>;
}

export default InputItem;
