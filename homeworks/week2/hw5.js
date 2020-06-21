function join(arr, concatStr) {
    if (arr.length === 0) return '';
    let tmp = '';
    let last = arr.pop();
    arr.forEach(e => tmp += e + concatStr);
    tmp += last;
    return tmp;
}

// 仿造 join() 接受空陣列時一律回傳空字串
// 宣告空字串 tmp 作為暫存用途
// 宣告 last 來暫存從 arr pop() 出來的資料
// 替 tmp 進行遞迴累加，製作字串夾心
// 為了製造夾心狀態，補上先前 pop 出來的資資料
// 回傳 tmp


function repeat(str, times) {
    let tmp = str;
    for (let i = 1; i < times; i++) {
        tmp += str;
    }
    return tmp;
}

// 宣告空字串 tmp 作為 str 的副本
// 替 tmp 進行遞迴累加 str 的內容
// 回傳 tmp

console.log('-----------join-----------');
console.log(join([1, 2, 3], ''));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ','));

console.log('----------repeat----------');
console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));