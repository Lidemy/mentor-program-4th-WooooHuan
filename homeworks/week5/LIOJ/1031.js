const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    if (Math.sqrt(i) % 1 === 0) result += i;
  } return result;
}

function io(input) {
  console.log(solve(Number(input[0])));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
