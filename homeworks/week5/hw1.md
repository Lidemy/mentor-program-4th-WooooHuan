## 前四週心得與解題心得

# lidemy http challenge

## Links
- API v1: https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba
- API v2: https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a

---

## Level 1
> https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}
- 參數：name=anyString  
- https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}&name=Qoo

---
## Level 2
> https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}
- id 54-58 試誤法，正解為 56
-  https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}&id=56

---
## Level 3
- https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}
```js
request.post({
  url: 'https://lidemy-http-challenge.herokuapp.com/api/books',
  form: { 
    name: '大腦喜歡這樣學',
    ISBN: '9789863594475',
  }
})
```
- id 在回傳的 body 資訊中："{"message":"新增成功","id":"1989"}"
- https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}&id=1989

---
## Level 4
> https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}

- 搜尋：books?q=世界
- 符合條件的回傳項目為
  {"id":79,"name":"世界末日與冷酷異境","author":"村上春樹","ISBN":"9571313408"}
- https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}&id=79

---
## Level 5
> https://lidemy-http-challenge.herokuapp.com/lv5?token={HarukiMurakami}

```js
request.delete(`https://lidemy-http-challenge.herokuapp.com/api/books${23}`)
```
- 刪除：id 為 23 的書目
- token 在回傳的 body 資訊中
- body: {"message":"\n咦...是刪掉了沒錯，但總覺得哪裡怪怪的，算了，先這樣吧！下一關的 token 為 {CHICKENCUTLET}\n"}

---

## Level 6
> https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}

- 使 `admin:admin123` 轉為 Base64: `YWRtaW46YWRtaW4xMjM=`
- 將結果放進 `headers`

```js
request.get({
  url: `https://lidemy-http-challenge.herokuapp.com/api/v2/me`,
  headers: { Authorization: 'Basic YWRtaW46YWRtaW4xMjM=' }
})
```

- 獲得 email 資訊：lib@lidemy.com
- 將 email 放至 query string: `&email=lib@lidemy.com`
- https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}&email=lib@lidemy.com

---

## Level 7

> https://lidemy-http-challenge.herokuapp.com/lv7?token={SECurityIsImPORTant}

- 承上題，改為執行刪除指令，指定 id 為 89

```js
function delv2() {
  request.delete(
    {
      url: `https://lidemy-http-challenge.herokuapp.com/api/v2/books/89`,
      //url: 'https://lidemy-http-challenge.herokuapp.com/api/books/23',
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4xMjM='
      }
    }, (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log(reqErr); return; }
    JSON.parse(body).forEach(book => console.log(`${book.id} ${book.name}`));
  });
}

```

HsifnAerok