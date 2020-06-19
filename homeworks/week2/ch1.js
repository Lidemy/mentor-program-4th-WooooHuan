function search(arr, n) {
    var l = 0
    var r = arr.length - 1;

    while(l <= r) {
        var i = Math.floor((l + r) / 2);
        if(arr[i] === n) {
            return i;
        } else if(arr[i] > n) {
            r = --i;
        } else {
            l = ++i;
        }
    }
    return -1;
}

// 設定左右邊界 l, r 為陣列 arr 起頭、結尾索引
// 當邊界 l 值小於等於邊界 r 值時，執行迴圈
// 設參考索引值 i 為邊界索引的平均值取整數
// 判斷 arr[i] 值是否等於 n 值, 是則回傳 i 值
// 若 arr[i] 值不等於 n 值, 視情況變更左右邊界值以縮小範圍
// 直到 arr[i] 值等於 n 值或是 l > r, 迴圈結束，回傳結果

console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));