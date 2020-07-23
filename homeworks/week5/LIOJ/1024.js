const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n, m) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}

function io(input) {
  solve(Number(input[0]), Number(input[1]));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
