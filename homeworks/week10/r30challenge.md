## r3: 0 Challenge

### Lv. 0

- 暖身送分題

> token = r30:start

<br>

---

### Lv. 1 - [系統] 前往 lv2: 透過 token 將怪物的名字轉成十八進位傳給 m3nt0r

> 

- 將二進制內容 100101001001100001110 轉為 18 進制

- 懶人解：餘除法

    - 進行 2^n 累加轉十進位：1217294

    - 將十進位結果進行除術為 18 的餘除，得到各次冪的商數為：11, 10, 13, 1, 8

    - 將結果轉為 18 進制：bad18

> token = bad18

<br>

---

### Lv. 2 - [系統] 前往 lv3: 請找出藏在畫面裡面的怪物並用 token 傳給女神

- select all 反白，發現字串 {divsurprise}

> token = divsurprise

<br>

---

### Lv. 3 - [系統] 前往 lv4: 請找出潛藏在瀏覽器中的第二個怪物

- 開啟 DevTools 查看 html 內容，找到一個被註解的元素 `<!-- {commentfaker} -->`

> token = commentfaker

<br>

---

### Lv. 4 - [系統] token {tRaNspar3nT} 已經給你了

- 本題 token 被 pseudo element 蓋住了，反白複製即可選取

> token = csspersona!

<br> 

---

### Lv. 5 - 前往 lv6：找出跳關的把戲，得到 token

- 本關會被自動進行位址轉跳，轉至 token 錯誤的第六關

- 在轉跳前按下瀏覽器的停止鍵會看見 {windowhack} 字樣

> token = windowhack

<br> 

---

### Lv. 6 - [系統] 前往 lv7：解出檔案裡面顏文字的秘密，或找到 window 裡面隱藏的 token 資訊

- 根據系統通知，前往 console 輸入 window 以查看 window 元素的內容

- 由於內容實在太多，使用搜尋功能輸入 token 試水溫

- 在第二個搜尋結果找到疑似 token 的內容： `__IamToken: "emojicute"` 

> token = emojicute

<br>

---

### Lv. 7 - [系統] 請找到放在包包深處的餅乾 tokentoken 資訊

- 根據系統通知，查看 cookie 內容，找到一個名為 TokenIsMe 的 Cookie

- 將內容 `%7Bcookieyumyum%7D` 進行 url 碼的還原，得到 {cookieyumyum}

> token = cookieyumyum

<br>

---

### Lv. 8 - [系統] 前往 lv9：請在 response 找出無頭騎士的頭的密碼，讓他解開封印

- 根據系統通知，查看 response headers

- 找到字樣： Tokenisme: {headshot} 

> token = headshot

<br> 

---

### Lv. 9 - [系統] 前往 lv10: 請解開留在 html 裡面的 php 程式碼，輸入正確的 token

- 根據系統通知，查看 html 中被註解掉的 php 片段

```php
function isTokenValid($token) 
{
    if (strlen($token) !== 8) return false;
    for($i = 1; $i <= 7; $i+=2) {
        if ((ord($token[$i]) * ord($token[$i - 1])) % $i !== 0) {
            return false;
        }
    }
    return true;
}
```

- 根據函式內容，整理符合條件的 token 的需求：

    - 長度為 8

    - token 中 index 為 1, 3, 5, 7 的字符，對應到 index 為 0, 2, 4, 6 的字符 
        >1 : 0, 3 : 2 類推

    - 將成對的字符，轉為 ascii 碼後相乘，必須可以整除組合中較大的 index 值
        >pseudocode: token[1].toAscii() * token[0].toAscii() / max(0, 1) == 0
    
    - 開始湊答案，字元 0, 1 相乘要能被 1 整除，可以隨意填入，不要做死填到不允許的字元都給過
    
    - 字元 2, 3 相乘要能被 3 整除，只要將雙方填入 3 的倍數，相乘後還是可以被 3 整除（乘法結合率 (?)

    - 以此類推，開始查表
    
    - 從 32 號開始搜尋編號符合的字符，得出 token !!!!((**

    - ~~拿去嘗試還真的過了~~

    - ~~如果 # 字符可以允許使用，就能湊成比較好看的 !!!!####~~

> token = !!!!((**

<br> 

---

### Lv. 10 - [系統] 前往 lv11: 請從 POST 中找到密碼進入城堡

- 到了第 10 關，打開 DevTools 會發現報錯內容

- 將報錯內容的網址拿去進行 POST 行為，得到 {"token":["sosdan"]} 的回應

> token = sosdan

<br> 

---

### Lv. 11 - [系統] 前往 lv12: 翻開異世界新聞版

- 根據系統通知，訪問 [異世界新聞版](http://r30challenge.herokuapp.com/news.php)

- 在其中找到一篇標題為「已刪除：只有管理員可以觀看」的文章

- 嘗試登入管理員後發現，登入介面並沒有實作功能

- 開始往其他方向找尋登入方法，發現 news.js 的內容或許與答案有關

```js
if(id !== '888888') {
    fetch(`./news_api.php?id=${id}`)
        .then(res => res.text())
        .then(data => {
            document.querySelector('.modal').classList.remove('hidden');
            document.querySelector('.modal__title').innerText = id;
            document.querySelector('.modal__content').innerText = data;
        })
        .catch(err => console.log(err));
} else {
    document.querySelector('.modal__title').innerText = id;
    document.querySelector('.modal__content').innerText = '你不是管理員';
}

```

- 根據內容得知，該頁面由 id 判斷是否顯示內文

- 將判斷式內容從 (id !== '888888') 改為 (true)

- 再次點開該篇文章，得到內容：
    - 「能看到這則留言的你，想必就是天選之人吧！ {fakeituntilyoumakeit} 拯救這個世界吧！」


> token = fakeituntilyoumakeit

<br> 

---

### Lv. 12 - [系統] 前往 lv13: 找找看關於 cookie 的秘密打倒小餅乾

- 根據系統通知，查看 cookie 內容，被 cookie 嗆聲 do you really know how to set cookie?

- 去到 response headers 找到 Set-Cookie 內容，找到 Comment=real_token_is:{you_are_cookie_master} 

> token = you_are_cookie_master

<br> 

---

### Lv. 13 - [系統] 前往 lv14: 請拿四碼數字測試看看送信人的拖延症，直到找出正確的密碼出來

- 根據系統通知，輸入 4 碼數字到 token 等候回應，回應較長則視為部分內容正確。

- 由於沒什麼耐性一直等回應讀秒，從 0000 試誤到 9999，得知嫌疑數字為 1, 3, 5, 7

- 再以 0001, 0010, 0100, 1000 測試數字正確位置即可（範圍會越縮越小

> token = 5371

<br> 

---

### Lv. 14 - [系統] 前往 lv15: 請解開畫面中的時間密碼，校正異世界的座標軸

- 待補

<br> 