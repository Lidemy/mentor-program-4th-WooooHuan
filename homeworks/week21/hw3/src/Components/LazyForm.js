import InputItem from './InputItem';
import RadioInputItem from './RadioInputItem';
import ExtraInputItem from './ExtraInputItem';

let inputInfoMap = new Map();

function LazyForm() {
  const mailRule = /^.+@.+\./;
  const numRule = /^09\d{8}$/;

  function isLegal() {
    const result = [];
    inputInfoMap.forEach(value => {
      result.push(value.isLegal());
    });
    return result.every(e => e);
  }

  function onSubmit() {
    if (!isLegal()) return;

    const result = [];
    inputInfoMap.forEach((value, key) => {
      result.push(`${key} : ${value.getValue()}`);
    });
    alert(result.join('\n'));
  }

  function updateInput(title, isLegal, getValue) {
    inputInfoMap.set(title, { isLegal, getValue });
  }

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
