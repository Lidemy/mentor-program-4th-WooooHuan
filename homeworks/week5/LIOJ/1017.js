const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(limit, count, list) {
  let sum = 0;
  list.sort((a, b) => a - b);
  for (let i = 0; i < Math.min(count, limit); i += 1) {
    sum += list.pop();
  } return sum;
}

function io(input) {
  const [limit, count, ...arr] = input.map(x => Number(x));
  console.log(solve(limit, count, arr));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
