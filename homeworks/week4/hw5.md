## 請以自己的話解釋 API 是什麼

- 一套使用者與提供者的溝通標準

- 使用者：從自己的需求出發，找到能「回傳」或「設定」相關內容的介面，不必全盤了解背後的運作方式，只需要輸入部分參數即可進行操作。

- 提供者：依照自己對系統運作方式的理解，只需開放出最低限度的參數讓使用者進行操作，可以有效減少外部對內部系統的直接影響。

---

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

- 418 I'm a teapot（RFC 2324）
    > 本操作碼是在 1998 年作為 IETF 的傳統愚人節笑話，在 RFC 2324 超文字咖啡壺控制協定中定義的。  
    這個 HTTP status code 在某些網站（ex: Google）與項目（ex: Node.js, ASP.NET 和 Go 語言）中用作彩蛋。

- 423 Locked（WebDAV；RFC 4918）
    > 當前訪問的資源被鎖定。

- 429 Too Many Requests （RFC 6585）
    > 用戶在規定時間內，傳送了太多的請求。

Reference: [Wikipedia List of HTTP status codes](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81),
[MDN HTTP response status codes](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)

---

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://lidemy-restaurant.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                    | /restaurants/10      |
| 新增餐廳   | POST   | /restaurants     | name: 店名 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 更改餐廳資訊   | PATCH   | /restaurants/:id     | name: 店名 | 無              |

---

### 回傳所有餐廳資料

```js
const request = require('request');

request.get(`https://lidemy-restaurant.com/restaurants?_limit=10`, (error, response, body) => {});
```
---  
### 回傳單一餐廳資料（`id`: 店號）

```js
const request = require('request');

request.get(`https://lidemy-restaurant.com/restaurants/${id}`, (error, response, body) => {});
```
---
### 新增餐廳（`name`: 店名）

```js
const request = require('request');

request.post({ url: `https://lidemy-restaurant.com/restaurants`, form: { name } }, (error, response, body) => {});
```
---
### 刪除餐廳（`id`: 店號）

```js
const request = require('request');

request.delete(`https://lidemy-restaurant.com/restaurants/${id}`, (error, response, body) => {});
```
---
### 更改餐廳資訊（`id`: 店號, `name`: 店名）

```js
const request = require('request');
---
request.patch({ url: `https://lidemy-restaurant.com/restaurants/${id}`, form: { name } }, (error, response, body) => {});
```

Reference: [week-4 hw README](./README.md)
