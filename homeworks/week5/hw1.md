## 前四週心得與解題心得

# lidemy http challenge

## Links
- API v1: https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba
- API v2: https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a
- API v3: https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4

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
request.delete({
  url: `https://lidemy-http-challenge.herokuapp.com/api/v2/books/89`,
  headers: {
    Authorization: 'Basic YWRtaW46YWRtaW4xMjM='
  }
})
```
- body: {"message":"\n希望下一次進這本書的時候不會再被偷走了。下一關的 token 為 {HsifnAerok}\n"}

---

## Level 8

> https://lidemy-http-challenge.herokuapp.com/lv8?token={HsifnAerok}

- 首先搜尋出符合條件的書籍：{id: 72, name: "日日好日：茶道教我的幸福15味【電影書腰版】", author: "森下典子", ISBN: "9981835427"}
- 承上題，改為執行 patch 指令

```js
request.patch({
  url: `https://lidemy-http-challenge.herokuapp.com/api/v2/books/72`,
  form: {
    name: '日日好日：茶道教我的幸福15味【電影書腰版】',
    ISBN: '9981835423'
  },
  headers: { Authorization: 'Basic YWRtaW46YWRtaW4xMjM=' }
}
```
- body: {"message":"\n希望之後他們能引進語音輸入系統，我就只要講講話就好。下一關的 token 為 {NeuN}\n"}

---

## Level 9

> https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}

- 爬關鍵字 `User Agent`
- 一知半解的用 request get 試誤

```js
request.get({
  url: `https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info`,
  headers: {
    Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
    'X-Library-Number': 20,
    'User-Agent': 'MSIE 6.0'
  }
})
```
- 還真的試出來了！
- body: {"message":"success","version":"1A4938Jl7","owner":"lib","createdAt":"121290329301"}
- 依照題意將 version 放進 query string 進行訪問
- https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}&version=1A4938Jl7
- 得到 token 為 {duZDsG3tvoA} 

---

## Level 10

> https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}

- 猜數字，結果為 9613
- http://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&num=9613
- 通關後，看到附註強調新關卡難度很高，先暫時放著好了
- 下一關的 token 為 {IhateCORS}

---

## Level 11
> http://lidemy-http-challenge.herokuapp.com/lv11?token={IhateCORS}

- 總之先看一下新文件，試著依照題意發出 request
- 果然沒這麼簡單...依照回傳的訊息，送出修正過的 request

```js
request.get({
  url: `https://lidemy-http-challenge.herokuapp.com/api/v3/hello`,
  headers: {
    origin: 'lidemy.com'
  }
})
```
- 獲得正確訊息：Hello! 下一關的 token 為 {r3d1r3c7}

---

## Level 12

> http://lidemy-http-challenge.herokuapp.com/lv12?token={r3d1r3c7}

- 依題意訪問 https://lidemy-http-challenge.herokuapp.com/api/v3/deliver_token 
- 得到訊息：我已經把運送要用的 token 給你囉，請你仔細找找
- 已知結果有進行轉址，轉址後的結果為 https://lidemy-http-challenge.herokuapp.com/api/v3/deliver_token_result
- 苦無頭緒只好開啟瀏覽器查轉址紀錄

- ![](./assets/lv12.png)

- ~~意外收穫下一關 Token~~

---

## Level 13

> http://lidemy-http-challenge.herokuapp.com/lv13?token={qspyz}

- 依題意訪問 https://lidemy-http-challenge.herokuapp.com/api/v3/logs
- 得到訊息：此 request 不是來自菲律賓，禁止存取系統資訊。
- 設定菲律賓 Proxy
- ![](./assets/lv13.png)
- 得到 token {SEOisHard}

---

## Level 14

> http://lidemy-http-challenge.herokuapp.com/lv14?token={SEOisHard}

- 依題意訪問 https://lidemy-http-challenge.herokuapp.com/api/v3/index
- 沒發現什麼特別之處，依照 hint 指示爬文如何偽裝 google
- 從 google 提供的[文件](https://support.google.com/webmasters/answer/1061943?hl=zh-Hant)找到符合需求的代理字串

```js
request.get({
  url: `https://lidemy-http-challenge.herokuapp.com/api/v3/index`,
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }
})
```

- 得到了由 google bot 訪問時所見的[首頁資訊](./assets/lv14.html)，下一關的 token {ILOVELIdemy!!!} 藏於其中

---

## Level 15

> http://lidemy-http-challenge.herokuapp.com/lv15?token={ILOVELIdemy!!!}




