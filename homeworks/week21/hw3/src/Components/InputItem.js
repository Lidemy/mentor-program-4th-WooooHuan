import { useState, useEffect } from 'react';

// 必填屬性的輸入項目，title 決定顯示主題，rule 為內容檢測規則 (選填)
function InputItem({ title, rule, updateInput }) {
  const [value, setValue] = useState(''); // 對應到 input 元件的輸入值
  const [hint, setHint] = useState('');   // 是否顯示警告

  // 內容刷新時，同步更新屬於自己的 input info
  useEffect(() => {
    updateInput(title, isLegal, getValue);
  })

  // input 子元件的必備介面，檢測 input 內容是否符合規則
  function isLegal() {

    if (value === '') {   // 輸入為空值一律擋下並顯示警告
      setHint('這是必填問題');
      return false;
    }
    else if (rule) {    // 具備檢測規則時，進行檢測
      const result = rule.test(value);
      setHint(result ? '' : '格式錯誤');
      return result;
    }
    setHint('');  // 通過檢測
    return true;
  }

  // input 子元件的必備介面，獲取輸入值
  function getValue() {
    return value;
  }

  // onChange 跟 setValue 連結，將輸入變更與 state 同步
  // 當 hint 不為空值時，顯示警告內容
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

// 警告元件，依需求填入適合的警告訊息
// hint icon 群組，是為了用 CSS 畫出辣個警告圖示
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
