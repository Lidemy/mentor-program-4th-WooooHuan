## 請簡單解釋什麼是 Single Page Application

- SPA（Single Page Application）是一種網路應用程式或網站的模型

    - 開發者透過腳本更新 DOM 內容，使網頁能夠由單一頁面呈現所有內容
    
    - 所有呈現及互動行為都在該頁面上發生，過程中並不會進行任何轉跳

<br>

---
## SPA 的優缺點為何

- 優點
    
    - 前後端分離，減少依賴情況，易於維護，也更容易實作離線操作的相關功能

    - 後端只需提供內容本身，有效減少不必要的內容傳輸

    - 減少全頁刷新的情況，視覺體驗較佳

- 缺點

    - 首次載入時間較長

    - 本地運算負擔較大

    - 若腳本遭到禁用，則無法如預期般地呈現內容

    - 由於前端內容大多是空殼，得留意 SEO 的相關問題

    - 使用者進行上一頁操作時得小心一點（或許有解，還沒深入了解

<br>

---

## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？


> 由於前幾題已經對這兩種方式進行了相關說明，本題單純描述做作業時，這兩週之間的差異

<br>

| | <center> 透過 API 串接 </center> | <center> 透過 PHP 直接輸出內容 </center>|
|--|--|--|
| <center> 網頁內容</center> | <center> 由前端將後端提供的資料<br>填入指定的呈現框架中 </center> | <center> 由後端搞定所有內容<br>一口氣傳給前端 </center> |
| <center>版型編輯</center> | <center> html 直接扔瀏覽器 </center> | <center> 請開啟本地 server 並連到指定位址瀏覽 </center> |
| <center>程式碼品質</center> | <center> 相對好一些 </center> | <center> ~~我其實不知道我在寫什麼~~ </center> |
| <center>依賴情況</center> | <center> 可以做到盡量分離 </center> | <center> ~~充分展示了團結之力~~ </center> |
| <center>開發體驗</center> | <center> 還可以接受 </center> | <center> ~~屎~~ </center> |
| <center>開發效率</center> | <center> 相對較快 </center> | <center> 除錯成本很高 </center> |
| <center>拖延症引發率</center> | <center> 高 </center> | <center> 極高 </center> |
