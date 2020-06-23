function multiply(a, b) {
    let lA = a.length;  //獲取字串 a 長度
    let lB = b.length;  //獲取字串 b 長度
    let result = [];    //計算暫存用陣列
    
    // 由於個位數位在字串最後一個元素，所以使用遞減迴圈
    for (let i = lA - 1; i >= 0; i--) {                 // 字串 A 自個位數逐項調用
        for (let j = lB - 1; j >= 0; j--) {             // 字串 B 自個位數逐項調用
            let k = i + j;                              // 設 i 位數乘以 j 位數的結果為 s, 則 s 的位數為 i + j 或 i + j + 1. 此處設 k 為 i + j 來表示位數 （乘法結果為 k 或 k + 1位）
            let c = (result[k + 1] || 0);               // 將 c 值賦予前一輪寫入的進位值，由於首次調用會出現 undefined, 使用短路迴避（實測後好像可忽略，不影響結果）
            let mul = a[i] * b[j] + c;                  // 將該輪的 a, b 數進行相乘，同時加上進位值 c
            result[k] = Math.floor(mul / 10);           // 擷取結果的十位數，放入陣列供下一輪作為進位值調用
            result[k + 1] = mul % 10;                   // 擷取結果的個位數，放入陣列中記錄（該輪計算完成！）
        }
    }

    return result.join('').replace(/^0/,'');            // 將暫存陣列的結果轉換為字串並回傳，若最後一次計算沒有進位，陣列第 0 個元素會為 0, 情況發生時使用 replace 刪除，用法類似 hw2
}

console.log(multiply('142857', '6'));                   // 142857 是一組很有趣的數字，詳見 : https://zh.wikipedia.org/wiki/142857