/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(strA, strB, l) {
  for (let i = 0; strA.length < l; i += 1) {
    strA += strB[i % strB.length];
  } return strA;
} 

function io(input) {
  const [strA, l, strB] = input;
  console.log(solve(strA, strB, l));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
