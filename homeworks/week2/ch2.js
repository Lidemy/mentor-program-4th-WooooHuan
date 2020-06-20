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
// 將整數參數轉換為二進制，存於陣列後回傳

function add(a, b) {
    let arrA = getBinaryArr(a);                                         // 將輸入 a, b 二值轉為二進制陣列
    let arrB = getBinaryArr(b);
    let tempArr = [], c = 0;                                            // 宣告一些變數暫存內容

    while (Math.max(arrA.length, arrB.length) !== 0) {                 // 建立 while 迴圈，終止條件為 a, b 陣列長度都已為 0
        let tmp = fullAdder(arrA.pop() || 0, arrB.pop() || 0, c);       // 將 a, b 陣列透過 pop() 方法將資料逐項取出，連同進位資訊輸入加法器，使用短路迴避 undefined
        c = tmp[1];                                                     // 由變數 c 暫存加法運算的進位值，用於下一輪的加法運算
        tempArr.push(tmp[0]);                                           // 將位元相加結果存入陣列
    }
    if (c) tempArr.push(c);                                             // 迴圈完成後，如果最後一次計算仍有進位，將進位存入陣列
    
    return parseInt(tempArr.reverse().join(''), 2);                     // 對 tempArr 進行 10 進位還原並回傳該值
}                                                                       // 除了註解以外，已確認沒有使用四則運算的運算子

console.log(add(123, 456));