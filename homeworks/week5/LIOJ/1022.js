const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n) {
  for (let i = 1; i <= n; i += 1) {
    console.log(`${' '.repeat(n - i)}${'*'.repeat((i * 2) - 1)}`);
  }
}

function io(input) {
  solve(Number(input[0]));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
