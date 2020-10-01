## hw3：Hoisting

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```

<br>

--- 

<br>

根據 [我知道你懂 hoisting，可是你了解到多深？](https://blog.huli.tw/2018/11/10/javascript-hoisting-and-tdz/) 所述：

- 當我們在進入一個 EC 的時候，會按照順序做以下三件事：
    
    - 把參數放到 VO 裡面並設定好值，傳什麼進來就是什麼，沒有值的設成 undefined
    
    - 把 function 宣告放到 VO 裡，如果已經有同名的就覆蓋掉
    
    - 把變數宣告放到 VO 裡，如果已經有同名的則忽略

- let 與 const 也有 hoisting 但沒有初始化為 undefined，而且在賦值之前試圖取值會發生錯誤

    - 本案例沒有 let 以及 const

<br>

---

<br>

> 以下以 → 符號表達「屬於」 (ex: global → a === 屬於 global 的 a )

1. global → a = 1

2. global → fn()

    - 初始化 fn()

    - 沒有參數

    - 沒有變數指向函式

    - fn() → var a = 5

        - Hoisting fn() → a

    - fn() → var a

        - fn() 已有同名變數，忽略

3. fn() → console.log(a)

    - fn() → a 尚未賦值

    - fn() → a = undefined

    > log: undefined

4. fn() → a = 5

5. fn() → console.log(a)

    - fn() → a = 5

    > log: 5

6. fn() → a++

    - fn() → a = 6

7. fn() → fn2()

    - 初始化 fn2()

    - 沒有參數

    - 沒有變數指向函式

    - 沒有宣告

8. fn2() → console.log(a)

    - 沒有關於 fn2() → a 的資訊

    - 上找 fn1()

    - fn1() → a 符合

    - fn1() → a = 6

    > log: 6

9. fn2() → (fn1() → a) = 20

10. b = 100

    - 沒有關於 fn2() → b 的資訊

    - 上找 fn1()

    - 沒有關於 fn() → b 的資訊

    - 上找 global

    - 沒有關於 global → b 的資訊

    - 於 global 宣告變數 b

    - global → b 符合

    - global → b = 100

11. fn() → console.log(a)

    - fn() → a = 20

    > log: 20

12. global → console.log(a)

    - global → a = 1

    > log: 1

13. global → a = 10

14. global → console.log(a)

    - global → a = 10

    > log: 10

15. global → console.log(b)

    - global → b = 100

    > log: 100

---

輸出：

> undefined  
5  
6  
20  
1  
10  
100
