const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function isOdd(n) {
  return n % 2 !== 0;
}

function counting(n, arr) {
  for (let i = 2; i < arr.length; i += 1) {
    if (n === arr[i]) return 0;
  } return 1;
}

function solve(nArr) {
  const seats = nArr[0];
  const canNotSeatArr = nArr.slice(2);
  let count = 0;
  for (let i = 1; i <= seats; i += 1) {
    if (!canNotSeatArr.includes(i)) {
      if (isOdd(i)) count += counting(i + 1, nArr);
      if (i + 2 <= seats) count += counting(i + 2, nArr);
    }
  } return count;
}

function io(input) {
  console.log(solve(input.map(x => Number(x))));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
