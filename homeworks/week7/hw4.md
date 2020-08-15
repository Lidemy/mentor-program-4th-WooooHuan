## 什麼是 DOM？

- 文件物件模型（Document Object Model）

- 一種節點樹狀資料結構

- 將 HTML 結構轉換成物件，透過介面和其它語言協作，便於訪問指定元素

<br>

---


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

- `CAPTURING_PHASE`：事件發生時，會先從根節點開始往下傳遞到 target

- `AT_TARGET`：事件傳遞到 target 節點

- `BUBBLING_PHASE`：事件循著 `CAPTURING_PHASE` 階段走過的路徑，傳回去根節點

<br>

---


## 什麼是 event delegation，為什麼我們需要它？

- 事件委派，是一種將「事件目標」與「事件接收對象」解耦的實作模式

- 將子節點們的事件一併處理，可以減少許多事件的掛載與移除操作

- 方便動態新增、移除元素

- 減少維護與偵錯成本

<br>

---


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

- `event.preventDefault()`：阻止預設行為

    ```html
    <a href="http://google.com" target="_blank">Google</a>
    ```

    - 設有一項 html 元素 `<a>`, 行為是連至 Google 頁面

    - 在該元素上新增 click 形式的 `addEventListener`

    - 在 callback function 中調用 `event.preventDefault()`

    - 點擊元素時，將不會連至 Google 頁面，但其它函式內容一樣會被執行

<br>

- `event.stopPropagation()`：阻止事件傳遞

    ```html
    <div id="DarthVader">
        <p id="LuckSkywalker"></p>
    </div>
    ```

    - 設有一對父子 html 元素 `<div>`, `<p>`, 父元素的呈現面積大於子元素。

    - 替兩者各別新增 click 形式的 `addEventListener`

    - 在父元素的 callback function 中，調用 `iAmYourFather()` 函式

    - 在子元素的 callback function 中，調用 `noThatIsNotTrueThatIsImpossible()` 函式

    - 對父元素進行點擊時，將會執行 `iAmYourFather()` 函式

    - 對子元素進行點擊時，除了 `noThatIsNotTrueThatIsImpossible()` 函式會被執行外，位在父元素的 `iAmYourFather()` 將一併被執行
        
    - 若在子元素的 callback function 中新增 `event.stopPropagation()`, 在點擊子元素時，位在父元素的 `iAmYourFather()` 將不會被執行