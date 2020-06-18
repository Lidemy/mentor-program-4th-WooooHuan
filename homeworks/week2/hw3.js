function reverse(str) {
    let arr = str.split('');
    let tmp = '';
    arr.forEach(e => tmp = e + tmp);
    console.log(tmp);
}

reverse('hello');

// 使用 split() 分割字串轉換為陣列
// 宣告一個空字串 tmp
// 透過 forEach() 以逆向累加方式向 tmp 賦值
// 輸出 tmp