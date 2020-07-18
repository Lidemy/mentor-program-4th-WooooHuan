const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(strA, strB) {
  while (strB.length > 0) {
    if (strA.pop() !== strB.pop()) return false;
  } return true;
}

function io(input) {
  console.log(solve(input[0].split(''), input[1].split('')));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
