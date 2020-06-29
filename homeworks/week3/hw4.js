const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(str) {
  const half = str.length / 2;
  const firstHalf = str.substring(0, Math.floor(half));
  const secondHalf = str.substring(Math.ceil(half), str.length);
  return firstHalf === secondHalf.split('').reverse().join('');
}

function io(input) {
  console.log(solve(input[0].toString()) ? 'True' : 'False');
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
