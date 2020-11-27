import { useState, useEffect } from 'react';

// 非必填的輸入項目，除了 title 外，可以額外設置 subTitle
function ExtraInputItem({ title, subTitle, updateInput }) {
  const [value, setValue] = useState(''); // 對應到 input 元件的輸入值

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

  // onChange 跟 setValue 連結，將輸入變更與 state 同步
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

export default ExtraInputItem;
