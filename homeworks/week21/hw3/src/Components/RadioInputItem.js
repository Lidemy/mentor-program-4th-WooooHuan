import { useState, useEffect } from 'react';

 // RadioInputItem - radio 輸入，當時有點懶，內容沒有模組化，僅符合需求寫死而已
function RadioInputItem({ title, updateInput }) {
  const content1 = '躺在床上用想像力實作';          // 寫死的選項內容 - 1
  const content2 = '趴在地上滑手機找現成的';        // 寫死的選項內容 - 2
  const [value, setValue] = useState(content1);   // 對應到 input 元件的輸入值

  // 內容刷新時，同步更新屬於自己的 input info
  useEffect(() => {
    updateInput(title, isLegal, getValue);
  });

  // input 子元件的必備介面，此元件一率回傳 true 
  function isLegal() {
    return true;
  }

  // input 子元件的必備介面，獲取輸入值
  function getValue() {
    return value;
  }

  // 因為內容寫死的，所以簡單暴力
  // 為了將 label 視為 radio 的有效點擊範圍，多包了幾層
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
