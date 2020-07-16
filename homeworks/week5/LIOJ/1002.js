/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  return Math.max.apply(null, arr);
}

function io(input) {
  input.forEach((e) => {
    const arr = e.split(' ').map(e => Number(e));
    if (!arr[0] && !arr[1]) return;
    console.log(solve(arr));
  });
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
