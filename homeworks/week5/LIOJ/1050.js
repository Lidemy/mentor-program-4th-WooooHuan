const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return `${i} ${j}`;
    }
  } return 'for eslint sh...';
}

function io(input) {
  const arr = input.map(x => x.split(' '));
  console.log(solve(Number(arr[0][1]), arr[1].map(x => Number(x))));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
