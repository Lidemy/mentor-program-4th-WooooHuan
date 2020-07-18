const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
const baseNum = 'a'.charCodeAt();

function solve(str, n) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const convertNum = ((str[i].charCodeAt() + n - baseNum) % 26) + baseNum;
    result += String.fromCharCode(convertNum);
  } return result;
}

function io(input) {
  const [n, str] = input;
  console.log(solve(str, Number(n)));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
