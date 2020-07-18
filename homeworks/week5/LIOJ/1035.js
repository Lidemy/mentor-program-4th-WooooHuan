/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  arr.sort((a, b) => a - b);
  for (const e of arr) console.log(e);
}

function io(input) {
  const [, ...arr] = input;
  solve(arr.map(x => Number(x)));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
