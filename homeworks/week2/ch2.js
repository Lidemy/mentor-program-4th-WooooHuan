function halfAdder(a, b) {
    return [a ^ b, a & b];
}
// 仿造邏輯電路實作半加器以供全加器使用

function fullAdder(a, b, c) {
    let half1 = halfAdder(a, b);
    let half2 = halfAdder(c, half1[0]);
    return [half2[0], half2[1] | half1[1]];
}
// 仿造邏輯電路實作全加器

function getBinaryArr(i) {
    return i.toString(2).split('');
}
// 將整數參數換為二進制，存於陣列後回傳

function add(a, b) {
    let arrA = getBinaryArr(a);
    let arrB = getBinaryArr(b);
    let tempArr = [], c = 0, result = '';

    while (Math.max(arrA.length, arrB.length) !== 0 ) {
        let tmp = fullAdder(arrA.pop() || 0, arrB.pop() || 0, c);
        c = tmp[1];
        tempArr.push(tmp[0]);
    }
    if (c === 1 ) tempArr.push(c);
    
    return parseInt(tempArr.reverse().join(''), 2);
}
// 將輸入 a, b 二值轉為二進制陣列
// 宣告一些變數暫存內容
// 建立 while 迴圈，終止條件為 a, b 陣列長度都已為 0
// 將 a, b 陣列透過 pop() 方法將資料逐項取出
// 使用 || 實作 pop() 不出資訊時輸入 0 的方法
// 將取出的資料做為全加器的輸入，進行加法運算，將結果存進 tempArr 中
// 由變數 c 暫存加法運算的進位值，用於下一輪的加法運算
// 當迴圈完成時，最後一次 c 腳位不為 0, 則將進位 push 進 tempArr 中
// 對 tempArr 進行 10 進位還原並回傳該值

console.log(add(123, 456));