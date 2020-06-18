function printFactor(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) console.log(i);
    }
}

printFactor(10);

// for loop 以 i 對 n 進行餘除
// 餘除結果為 0 時 i 即為 n 的因數
// 印出 i 值