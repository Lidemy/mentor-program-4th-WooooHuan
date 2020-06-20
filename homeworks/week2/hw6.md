``` js
function isValid(arr) {
  for(var i=0; i < arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i < arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程

1. 接到執行函式 `isValid()` 的要求，並附帶陣列引數 `[3, 5, 8, 13, 22, 35]`

2. 執行函式 `isValid()` ，並將引數轉為參數 `arr`

3. 建立一個 for loop 運行區塊，並執行 for loop

    - 宣告該迴圈參考值 `i` 的初始值為 `0`

    - 宣告該迴圈終止條件為：參考值 `i` 小於 `arr` 的屬性 `length`

    - 宣告該迴圈每次結束後進行的條件改變內容，此處為遞增參考值 `i`

      - 執行存於迴圈內容的 `if` 判斷式

      - 若 `arr` 的第 `i` 個元素值 **小於等於 `0`**, 則回傳字串 `invalid` 並退出該函式

      - 重複執行迴圈直到終止條件或是 `if` 判斷式條件被滿足
        
        ```
        1. 此輪 i 值為 0, 進行 if 判斷 arr[i] 不為 0, i 小於 arr.length, i 值遞增，進入下一輪迴圈
        2. 此輪 i 值為 1, 進行 if 判斷 arr[i] 不為 0, i 小於 arr.length, i 值遞增，進入下一輪迴圈
        3. 此輪 i 值為 2, 進行 if 判斷 arr[i] 不為 0, i 小於 arr.length, i 值遞增，進入下一輪迴圈
        4. 此輪 i 值為 3, 進行 if 判斷 arr[i] 不為 0, i 小於 arr.length, i 值遞增，進入下一輪迴圈 
        5. 此輪 i 值為 4, 進行 if 判斷 arr[i] 不為 0, i 小於 arr.length, i 值遞增，進入下一輪迴圈
        6. 此輪 i 值為 5, 進行 if 判斷 arr[i] 不為 0, i 不小於 arr.length, 迴圈結束
        ```
    
      - 此例為終止條件滿足，迴圈結束，接著執行函式 `isValid()` 的內容


4. 建立一個 for loop 運行區塊，並執行 for loop

    - 宣告該迴圈參考值 `i` 的初始值為 `2`

    - 宣告該迴圈終止條件為：參考值 `i` 小於 `arr` 的屬性 `length`

    - 宣告該迴圈每次結束後進行的條件改變內容，此處為遞增參考值 `i`

      - 執行存於迴圈內容的 `if` 判斷式

      - 若 `arr` 的第 `i` 個元素值 **不等於** 前兩個元素的值之合，則回傳字串 `invalid` 並退出該函式

      - 重複執行迴圈直到終止條件或是 `if` 判斷式條件被滿足
      
          ```
          1. 此輪 i 值為 2, 進行 if 判斷 arr[i] 等於 arr[i-1] + arr[i-2], i 小於 arr.length, i 值遞增，進入下一輪迴圈
          2. 此輪 i 值為 3, 進行 if 判斷 arr[i] 等於 arr[i-1] + arr[i-2], i 小於 arr.length, i 值遞增，進入下一輪迴圈 
          3. 此輪 i 值為 4, 進行 if 判斷 arr[i] 不等於 arr[i-1] + arr[i-2] 
          4. 執行 if 區塊內容，回傳字串 invalid 並中斷迴圈
          ```
    
      - 此例為 `if` 判斷式條件滿足，迴圈結束，回傳字串 `invalid` 並退出該函式

5. 已完成函式 `isValid([3, 5, 8, 13, 22, 35])` 的執行要求，腳本結束！