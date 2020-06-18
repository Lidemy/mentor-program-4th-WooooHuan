function join(arr, concatStr) {
    let tmp = '';
    let last = arr.pop();
    arr.forEach(e => tmp += e + concatStr);
    tmp += last;
    return tmp;
}

function repeat(str, times) {
    let tmp = str;
    for (let i = 1; i < times; i++) {
        tmp += str;
    }
    return tmp;
}

console.log(join(['a', 'b', 'c'], '!'));
console.log(repeat('a', 5));