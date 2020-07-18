/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function isNaturalNumber(str) {
  return /^[0-9]*[1-9][0-9]*$/.test(str);
}

function solve(str, arr) {
  let result = '';
  for (let i = 1; i < arr.length; i += 1) {
    result += str[arr[i] - 1];
  } return result;
}

function io(input) {
  input.map(e => isNaturalNumber(e) ? Number(e) : e);
  const count = input.shift();
  let str = '';
  for (let i = 0; i < count; i += 1) {
    str += input.shift();
  }
  console.log(solve(str, input));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
