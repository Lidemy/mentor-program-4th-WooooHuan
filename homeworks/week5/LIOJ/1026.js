const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  for (let i = 0; i < arr.length - 2; i += 1) {
    if (arr[i + 1] / arr[i] !== arr[i + 2] / arr[i + 1]) return 'No';
  } return 'Yes';
}

function io(input) {
  const [, numbers] = input;
  const list = numbers.split(' ').map(x => Number(x));
  console.log(solve(list));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
