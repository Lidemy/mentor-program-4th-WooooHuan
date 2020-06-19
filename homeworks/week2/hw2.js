function capitalize(str) {
    return str.replace(/^[a-z]/, (c) => c.toUpperCase());
}
// 使用 replace() 進行字串內容變更
// regex : ^ 告知比較對象為字串首字
// regex : [a-z] 告知匹配條件為小寫字母 a-z
// 將過濾出來的小寫首字，以 c 作為引數，傳入函式進行大寫變換

console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));