import InputItem from './InputItem';
import RadioInputItem from './RadioInputItem';
import ExtraInputItem from './ExtraInputItem';

// 記錄各項 input 用的 map
let inputInfoMap = new Map();

// 表單內容本體
function LazyForm() {
  const mailRule = /^.+@.+\./;  // mail 的檢測規則
  const numRule = /^09\d{8}$/;  // 手機號碼的檢測規則 (只限台灣地區)

  // 判斷 map 中的所有輸入，是否都通過檢測
  function isLegal() {
    const result = [];
    inputInfoMap.forEach(value => {
      result.push(value.isLegal());
    });
    return result.every(e => e);
  }

  // 送出鍵，當所有輸入都通過檢測時，以 alert 輸出表單內容
  function onSubmit() {
    if (!isLegal()) return;

    const result = [];
    inputInfoMap.forEach((value, key) => {
      result.push(`${key} : ${value.getValue()}`);
    });
    alert(result.join('\n'));
  }

  // 更新輸入資訊，子元件與表單的溝通管道 (子元件負責 input 的相關職責)
  // title 必須為唯一值才會如預期般運作 (理應不會出現 title 重複出現的 use case)
  function updateInput(title, isLegal, getValue) {
    inputInfoMap.set(title, { isLegal, getValue });
  }

  // InputItem - 必填屬性的輸入項目，title 決定顯示主題，rule 為內容檢測規則 (選填)
  // RadioInputItem - radio 輸入，當時有點懶，內容沒有模組化，僅符合需求寫死而已
  // ExtraInputItem - 非必填的輸入項目，除了 title 外，可以額外設置 subTitle
  // 剩下一些沒元件化價值的內容就直接打在 jsx 裡了
  return (
    <div className="form-content-area">
      <div className="content-title">新拖延運動報名表單</div>
      <div className="content-time-and-location">
        <div>活動日期：2020/12/10 ~ 2020/12/11</div>
        <div>活動地點：台北市大安區新生南路二段1號</div>
      </div>
      <div className="content-hint emphasize">* 必填</div>

      <InputItem title={'暱稱'} {...{ updateInput }} />
      <InputItem title={'電子郵件'} rule={mailRule} {...{ updateInput }} />
      <InputItem title={'手機號碼'} rule={numRule}  {...{ updateInput }} />
      <RadioInputItem title={'報名類型'} {...{ updateInput }} />
      <InputItem title={'怎麼知道這個活動的？'} {...{ updateInput }} />
      <ExtraInputItem title={'其他'} subTitle={'對活動的一些建議'} {...{ updateInput }} />

      <div className="content-input-submit">
        <input className="submit-btn" name="submit-form" type="submit" value="提交" onClick={onSubmit}></input>
      </div>
      <div className="content-submit-comment">請勿透過表單送出您的密碼。</div>
    </div>
  );
}

export default LazyForm;
