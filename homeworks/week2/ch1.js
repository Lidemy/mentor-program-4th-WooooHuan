function search(arr, n) {
    var l = 0
    var r = arr.length - 1;                     // 設定左右邊界 l, r 為陣列 arr 起頭、結尾索引

    while(l <= r) {                             // 當邊界 l 值小於等於邊界 r 值時，執行迴圈
        var i = Math.floor((l + r) / 2);        // 設參考值 i 為邊界索引的平均值取整數
        if(arr[i] === n) {                      // 判斷 arr[i] 值是否等於 n 值, 是則回傳 i 值
            return i;                           
        } else if(arr[i] > n) {                 // 若 arr[i] 值不等於 n 值, 視情況變更左右邊界值以縮小範圍
            r = --i;                            // 重複執行，直到 arr[i] 值等於 n 值或是 l > r, 迴圈結束，回傳結果
        } else {
            l = ++i;
        }
    }
    return -1;
}

console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));