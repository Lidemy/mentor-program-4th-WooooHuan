## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

> 簡單爬了一下差異，有找到其它內容再補充

| | <center>VARCHAR</center> | <center>TEXT </center>|
|--|--|--|
| <center>預設值</center> | <center>可</center> | <center>否</center> |
| <center>索引</center> | <center>理論上可以添加全部索引</center> | <center>只能是前綴索引</center> |
| <center>效率</center> | <center>常規下比 TEXT 快</center> | <center>常規下比 VARCHAR 慢</center> |
| <center>結尾空格</center> | <center>去除</center> | <center>保留</center> |
| <center>數據大小</center> | <center>會有額外字節記錄數據大小</center> | <center>不額外占用數據空間</center> |

---

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

- Cookie 是一種純文字檔案，用於記錄特定資訊以供使用，大多用於解決狀態記錄需求（應付 HTTP 協定的無狀態特性）
    - 記憶體 Cookie 隨關即逝，硬體 Cookie 可長期保存但仍有賞味期限

- `Set-Cookie: <cookie-name>=<cookie-value>`

- 瀏覽器可透過 request 行為將 Cookie 帶去 Server

---

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

- 密碼尚未加密 (?)

