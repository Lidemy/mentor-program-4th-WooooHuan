const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n) {
  if (n > 2) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    } return true;
  } return n === 2;
}

function io(input) {
  const info = input.map(x => parseInt(x, 10));
  for (let i = 1; i <= info[0]; i += 1) {
    console.log(solve(info[i]) ? 'Prime' : 'Composite');
  }
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
