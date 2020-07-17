const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(count, arr) {
  let counter = 0;
  for (let i = 0; counter < count; i += 4) {
    const px = (arr[i] - arr[i + 2]) ** 2;
    const py = (arr[i + 1] - arr[i + 3]) ** 2;
    counter += 1;
    console.log(Math.sqrt(px + py).toFixed(2));
  }
}

function io(input) {
  const [count, ...arr] = input.map(x => Number(x));
  solve(count, arr);
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
