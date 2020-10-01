## hw1：Event Loop

在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。  
請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

<br>

--- 

<br>

根據 [MDN EventLoop](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/EventLoop) 所述：

- 呼叫函式（Function）會形成一個 frame 的堆疊

- 添加訊息（Adding messages）

    - 呼叫 setTimeout 時有兩個參數：第一個是會被加入到佇列中的訊息，第二個參數為延遲時間（預設為 0）
        
    - 若無其他訊息在佇列中，則這個訊息會在設定的延遲後立刻被處理
    
    - 若佇列內有其他訊息，setTimeout 的訊息必須等到其他訊息處理完
        
    - 因此第二個時間參數只能表示為最少時間，而不是一個精準的時間

- 零延遲（Zero delays）

    - 「零延遲」並非意味著回呼函式（callback function）會在 0 毫秒之後立刻執行
        
    - 當使用延遲 0 毫秒參數來呼叫 setTimeout 函式並非示程式會過了該段時間就會執行，而是會參考佇列中等待的訊息數量

<br>


---

<br>


本案例的幾項關鍵：

- 若無其他訊息在佇列中，則這個訊息會在設定的延遲後立刻被處理
    
- 若佇列內有其他訊息，**setTimeout 的訊息必須等到其他訊息處理完**

- 當使用延遲 0 毫秒參數來呼叫 setTimeout 函式**並非示程式會過了該段時間就會執行，而是會參考佇列中等待的訊息數量**

<br>

---

<br>

根據上述特性進行分析，得出本案例的等效堆疊如下：

1. console.log(1)

<br>

2. setTimeout(() => console.log(2), 0)
    
    - 此時堆疊的是 setTimeout 本身，內容尚未執行

    <br>

3. console.log(3)

<br>

4. setTimeout(() => console.log(4), 0)
    
    - 此時堆疊的是 setTimeout 本身，內容尚未執行

    <br>

5. console.log(5)
    
    <br>

6. console.log(2)
    
    - 來自 setTimeout(() => console.log(2), 0)

    <br>

7. console.log(4)
    
    - 來自 setTimeout(() => console.log(4), 0)

<br>

---

輸出：

> 1  
> 3  
> 5  
> 2  
> 4  
