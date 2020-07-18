const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function strToArr(str) {
  return str.split('').map(x => Number(x));
}

function arrToStr(arr) {
  return arr.reduce((a, b) => a + b).toString();
}

function solve(arr) {
  let sum = arrToStr(arr);
  while (sum.length > 1) {
    sum = arrToStr(strToArr(sum));
  } return sum;
}

function io(input) {
  console.log(solve(strToArr(input[0].split(' ').join(''))));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
