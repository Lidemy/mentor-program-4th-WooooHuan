const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n) {
  for (let i = 1; i <= n; i += 1) {
    console.log('*'.repeat(i));
  }
}

function io(input) {
  (solve(parseInt(input[0], 10)));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
