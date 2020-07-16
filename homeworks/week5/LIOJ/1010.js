const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(a, b) {
  return a === b ? 'Yes' : 'No';
}

function io(input) {
  const arr = input[0].split(' ');
  console.log(solve(arr[0], arr[1]));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
