## hw2：Event Loop + Scope

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

<br>

--- 

<br>

根據 [MDN EventLoop](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/EventLoop) 所述：

- 呼叫函式（Function）會形成一個 frame 的堆疊

- 添加訊息（Adding messages）

    - 呼叫 setTimeout 時有兩個參數：第一個是會被加入到佇列中的訊息，第二個參數為延遲時間（預設為 0）
        
    - 若無其他訊息在佇列中，則這個訊息會在設定的延遲後立刻被處理
    
    - 但若佇列內有其他訊息，setTimeout 的訊息必須等到其他訊息處理完
        
    - 因此第二個時間參數只能表示為最少時間，而不是一個精準的時間

- 零延遲（Zero delays）

    - 「零延遲」並非意味著回呼函式（callback function）會在 0 毫秒之後立刻執行
        
    - 當使用延遲 0 毫秒參數來呼叫 setTimeout 函式並非示程式會過了該段時間就會執行，而是會參考佇列中等待的訊息數量

<br>


---

<br>


本案例的幾項關鍵：

- 根據宣告位置以及宣告 keyword `var`, 認定變數 `i` 為全域變數

- 本案例的 setTimeout 延遲基數為 1000
    
- 若佇列內有其他訊息，setTimeout 的訊息必須等到其他訊息處理完


<br>

---

<br>

根據上述特性進行分析，得出本案例的等效堆疊如下：

<br>

1. console.log(i)
    
    - i = 0

2. setTimeout(() => console.log(i), i * 1000) 

    - 此時堆疊的是 setTimeout 本身，內容尚未執行

    - 此時 i = 0, 得出延遲為 0 ms

    - 此時佇列內有其他訊息，setTimeout 的訊息必須等到其他訊息處理完

<br>

3. console.log(i)
    
    - i = 1

4. setTimeout(() => console.log(i), i * 1000) 

    - 此時堆疊的是 setTimeout 本身，內容尚未執行

    - 此時 i = 1, 得出延遲為 1000 ms

<br>

5. console.log(i)
    
    - i = 2

6. setTimeout(() => console.log(i), i * 1000) 

    - 此時堆疊的是 setTimeout 本身，內容尚未執行

    - 此時 i = 2, 得出延遲為 2000 ms

<br>

7. console.log(i)
    
    - i = 3

8. setTimeout(() => console.log(i), i * 1000) 

    - 此時堆疊的是 setTimeout 本身，內容尚未執行

    - 此時 i = 3, 得出延遲為 3000 ms

<br>

9. console.log(i)
    
    - i = 4

10. setTimeout(() => console.log(i), i * 1000) 

    - 此時堆疊的是 setTimeout 本身，內容尚未執行

    - 此時 i = 4, 得出延遲為 4000 ms

    - 執行完畢後，開始執行等候中的 setTimeout 

<br>

11. console.log(i)
    
    - i = 5

    - 來自 setTimeout(() => console.log(i), 0)

    - 延遲為 0 ms

<br>

12. console.log(i)
    
    - i = 5

    - 來自 setTimeout(() => console.log(i), 1000)

    - 延遲為 1000 ms

<br>

13. console.log(i)
    
    - i = 5

    - 來自 setTimeout(() => console.log(i), 2000)

    - 延遲為 2000 ms

<br>

14. console.log(i)
    
    - i = 5

    - 來自 setTimeout(() => console.log(i), 3000)

    - 延遲為 3000 ms

<br>

15. console.log(i)
    
    - i = 5

    - 來自 setTimeout(() => console.log(i), 4000)

    - 延遲為 4000 ms

<br>

---

輸出：

> i: 0  
i: 1  
i: 2  
i: 3  
i: 4  
5 (~0 ms)  
5 (1000 ms)  
5 (2000 ms)  
5 (3000 ms)  
5 (4000 ms)  

> ( 括號內容為描述延遲時間用，非真實輸出 )
