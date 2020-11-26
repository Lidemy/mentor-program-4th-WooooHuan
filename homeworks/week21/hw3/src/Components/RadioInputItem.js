import { useState, useEffect } from 'react';

function RadioInputItem({ title, updateInput }) {
  const content1 = '躺在床上用想像力實作';
  const content2 = '趴在地上滑手機找現成的';
  const [value, setValue] = useState(content1);

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
    <div className="content-input-group content-sign-up-type">
      <div className="input-title">{title}<span className="emphasize"> *</span></div>
      <label className="input-radio-cover">
        <input
          className="input-radio"
          name="sign-up-type"
          type="radio"
          value={content1}
          onChange={e => setValue(e.target.value)}
          defaultChecked
        ></input> {content1}</label>
      <label className="input-radio-cover">
        <input
          className="input-radio"
          name="sign-up-type"
          type="radio"
          value={content2}
          onChange={e => setValue(e.target.value)}
        ></input> {content2}</label>
    </div>
  );
}

export default RadioInputItem;
