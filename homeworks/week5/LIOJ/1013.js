const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n) {
  const methodList = [0, 0, 1, 2];
  for (let i = 4; i <= n; i += 1) {
    methodList.push(methodList[i - 2] + methodList[i - 1]);
  } return methodList[n];
}

function io(input) {
  console.log(solve(Number(input[0])));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
