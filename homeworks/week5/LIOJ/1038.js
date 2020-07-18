const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(target, arr) {
  return arr.indexOf(target);
}

function io(input) {
  const [target, , ...arr] = input;
  console.log(solve(target, arr));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
