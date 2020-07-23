const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
const gap = 'a'.charCodeAt() - 'A'.charCodeAt();

function solve(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += /[A-Z]/.test(str[i]) ? String.fromCharCode(str[i].charCodeAt() + gap) : str[i];
  } return result;
}

function io(input) {
  console.log(solve(input[0]));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
