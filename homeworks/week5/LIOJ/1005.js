/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function isPrime(n) {
  const sqrtCache = Math.sqrt(n);
  if (n > 2) {
    for (let i = 2; i <= sqrtCache; i += 1) {
      if (n % i === 0) return false;
    } return true;
  } return n === 2;
}

function sumOfFactor(n) {
  const factorList = [];
  for (let i = 1; i < n; i += 1) {
    if (n % i === 0) factorList.push(i);
  } return factorList.reduce((a, b) => a + b);
}

function solve(n) {
  if (isPrime(n)) return 'QQ';
  const sof = sumOfFactor(n);
  return n === sumOfFactor(sof) ? sof : 'QQ';
}

function io(input) {
  const nArr = input.map(x => Number(x));
  nArr.forEach(n => {
    if (n === 0) return;
    console.log(solve(n));
  });
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
