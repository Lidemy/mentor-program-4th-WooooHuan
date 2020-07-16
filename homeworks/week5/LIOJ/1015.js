const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(count, arr) {
  if (!arr.includes('A') || !arr.includes('B')) return ['PEACE'];
  let countA = 0;
  const listA = [];
  const listB = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case 'A': listA.push(i + 1); countA += 1; break;
      case 'B': listB.push(i + 1); break;
      default:
    }
  }
  if (countA === count / 2) return ['PEACE'];
  return countA > count / 2 ? listB : listA;
}

function io(input) {
  const [count, ...arr] = input;
  const resultArr = solve(count, arr);
  for (let i = 0; i < resultArr.length; i += 1) {
    console.log(resultArr[i]);
  }
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
