## 什麼是 Ajax？

- Asynchronous JavaScript and XML → 非同步的 JavaScript 與 XML 技術

<br>

---

## 用 Ajax 與我們用表單送出資料的差別在哪？

- AJAX 可以僅向伺服器傳送並取回必須的資料

- AJAX 能在不更新整個頁面的前提下維護資料

<br>

---

## JSONP 是什麼？

- JSON with Padding → JSON 的一種「使用模式」，可以讓網頁從別的網域要資料。

<br>

---

## 要如何存取跨網域的 API？

- 遵循 Cross-Origin Resource Sharing 規範

- Server 必須在 `Response` 的 `Header` 裡面加上 `Access-Control-Allow-Origin`

<br>

---

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

- 因為本週有瀏覽器門神在把關