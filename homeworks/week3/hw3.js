const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n) {
  const sqrtCache = Math.sqrt(n);
  if (n > 2) {
    for (let i = 2; i <= sqrtCache; i += 1) {
      if (n % i === 0) return false;
    } return true;
  } return n === 2;
}

function io(input) {
  const inputArr = input.map(x => parseInt(x, 10));
  for (let i = 1; i <= inputArr[0]; i += 1) {
    console.log(solve(inputArr[i]) ? 'Prime' : 'Composite');
  }
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
