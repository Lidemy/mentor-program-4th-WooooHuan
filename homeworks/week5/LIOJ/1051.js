const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) count += 1;
    }
  } return count;
}

function io(input) {
  console.log(solve(input[1].split(' ').map(x => Number(x))));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
