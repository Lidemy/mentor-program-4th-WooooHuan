const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(str) {
  return str === str.split('').reverse().join('');
}

function io(input) {
  console.log(solve(input[0].toString()) ? 'True' : 'False');
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
