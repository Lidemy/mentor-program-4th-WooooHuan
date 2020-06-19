function multiply(a, b) {
    let lA = a.length; //獲取字串長度
    let lB = b.length; //獲取字串長度
    let result = []; //暫存用
    
    for (let i = lA - 1; i >= 0; i--) {   
        for (let j = lB - 1; j >= 0; j--) {
            let k = i + j;
            let mul = a[i] * b[j] + (result[k + 1] || 0);
            result[k] = Math.floor(mul / 10); // 取 10 位
            result[k + 1] = mul % 10; // 取各位
            console.log(mul);
        }
    }

    return result.join('').replace(/^0/,''); //如果字首出現 0, 將 0 移除
}

console.log(multiply('10', '8'));