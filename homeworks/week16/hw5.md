## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。

變數

- 共有 7 種資料型態

    - boolean

    - null

    - undefined

    - number

    - string

    - symbol

    - object

- 除 object 以外，全為 primitive values

- 須留意 primitive 與 object 在賦值上的意義並不相同

---

- var, let, const

    - var

        - scope 範圍以 function 為單位

        - 有區域變數溢出風險

        - 有循環變數溢出風險

    - let

        - scope 範圍以 block 為單位

        - 基於此特性，可減少變數溢出的可能

        - 在 hoisting 發生時，具備 TDZ 特性

    - const

        - scope 範圍以 block 為單位

        - 無法重新賦值

        - 該值若為物件，物件之下的屬性不受賦值限制影響（取決於被賦值對象的本身設定
        
        - 在 hoisting 發生時，具備 TDZ 特性

---

Scope

- 所有變數都有自己的 scope

- scope 大小取決於被宣告的位置

- 當在該層找不到指定名稱的變數時，將會不斷往上層尋找，找到 global 層為止

- 若最終在 global 層也沒有找到指定對象時，會在 global 層直接新增一個

---

Hoisting 

- 該機制可以讓 function 的宣告位置變得更靈活

- 藉由該機制，得以實現 function 互調

- 好好宣告變數，不要隨意撞名，可以省下很多煩惱

- function 初始化的優先順序
    
    - 參數優先
    
    - 接著函式
        
        - 若函式宣告與參數撞名，將複寫參數內容
    
    - 最後是變數
    
        - 優先最低，撞名則忽略

- let 與 const 也有 hoisting

    - 沒有初始化時為 undefined，而且在賦值之前試圖取值會發生錯誤

---

Closure

- 透過回傳值（function 或物件）與外界溝通，將部分內容對外公開，其餘保護在內部

- 只要仍有對象參考該 closure, 就能將 closure 內部的資訊進行保存

- 使用 closure 可以有效隔絕外部對內部的變數干擾

- 是一種在插件開發常見的應用方式

---

類 Object 實現方式

- 可透過 class 進行規格描述，再以 new 進行實例化

- 也可透過對構造函式進行 new, call, apply 來進行實例化

- js 透過 property 實作 object 的關聯機制

- 在找不到該物件所指定的屬性時，將會透過原型鍊上探搜尋

- 透過原型鍊特性，可實現類似繼承的效果

- closure 為其中一種特例形式，但各實例的內部的資訊並不互通

---

this

- this 代表「所指定物件」的 instance 本身

- 一但脫離了物件導向，this 沒有什麼太大的意義

- 無意義的 this

    - 嚴格模式環境下，預設為 undefined
    - 非嚴格模式，瀏覽器預設指向 window
    - 非嚴格模式，node.js 預設指向 global

- 可藉由 call 跟 apply 方法的第一個參數，賦予「被調用的構造函式」的「實例對象」的 this 值

    - 儘管原本已經有 this，也依然會被這種方法給覆蓋掉

- 可藉由 bind 方法，將「被調用的構造函式」的「實例對象」的 this 值與傳入對象綁定

- 在非嚴格模式底下，無論是用 call、apply 還是 bind，傳進去的值如果是 primitive 都會被轉成 object

- this 的值跟作用域跟程式碼的位置在哪裡完全無關，而是跟「如何呼叫」有關