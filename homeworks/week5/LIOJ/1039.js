/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(target, arr) {
  const tmp = arr.map(x => x = target);
  for (const e of tmp) console.log(e);
}

function io(input) {
  const [target, , ...arr] = input;
  solve(target, arr);
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
