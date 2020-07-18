const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arrA, arrB) {
  let result = Math.abs(arrA[0] - arrB[0]);
  for (let i = 0; i < arrA.length; i += 1) {
    for (let j = 0; j < arrB.length; j += 1) {
      result = Math.min(Math.abs(arrA[i] - arrB[j]), result);
    }
  } return result;
}

function io(input) {
  const arrA = input[1].split(' ').map(x => Number(x));
  const arrB = input[2].split(' ').map(x => Number(x));
  console.log(solve(arrA, arrB));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
