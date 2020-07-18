/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arrA, arrB) {
  for (const e of arrB) {
    console.log(arrA.indexOf(e));
  }
}

function io(input) {
  const info = input[0].split(' ').map(x => Number(x));
  const arrA = input.slice(1, info[0] + 1);
  const arrB = input.slice(info[0] + 1, info[0] + info[1] + 1);
  solve(arrA, arrB);
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
