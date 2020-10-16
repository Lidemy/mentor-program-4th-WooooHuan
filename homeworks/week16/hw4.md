## hw4：What is this?

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

--- 

<br>

根據 [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.huli.tw/2019/02/23/javascript-what-is-this/) 所述：

- this 代表「所指定物件」的 instance 本身

- 一但脫離了物件導向，this 沒有什麼太大的意義

- 無意義的 this

    - 嚴格模式底下就都是 undefined
    - 非嚴格模式，瀏覽器底下是 window
    - 非嚴格模式，node.js 底下是 global

 - 可藉由 call 跟 apply 方法的第一個參數，賦予「被調用的構造函式」的「實例對象」的 this 值

    - 儘管原本已經有 this，也依然會被這種方法給覆蓋掉

- 可藉由 bind 方法，將「被調用的構造函式」的「實例對象」的 this 值與傳入對象綁定

- 在非嚴格模式底下，無論是用 call、apply 還是 bind，傳進去的值如果是 primitive 都會被轉成 object

- this 的值跟作用域跟程式碼的位置在哪裡完全無關，而是跟「如何呼叫」有關

<br>

---

<br>

1. obj.inner.hello()

    - 轉為 call 形式觀察
    
    - obj.inner.hello.call(obj.inner)

    - obj.inner.value = 2

    > log: 2
    
2. obj2.hello() 

    - 轉為 call 形式觀察
    
    - obj2.hello.call(obj2)

    - 由於 obj2 = obj.inner, 等效於第一題

    - obj.inner.value = 2

    > log: 2


3. hello()

    - 轉為 call 形式觀察

    - obj.inner.hello.call()

    - null.value = undefined

    > log: undefined

<br>

---

輸出：

> 2  
2  
undefined