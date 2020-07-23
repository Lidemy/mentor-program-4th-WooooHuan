const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n) {
  const b = n.toString(2);
  let count = 0;
  for (let i = 0; i < b.length; i += 1) {
    if (parseInt(b[i], 10)) count += 1;
  } return count;
}

function io(input) {
  console.log(solve(Number(input[0])));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
