const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function compare(a, b, k) {
  const result = k > 0 ? a > b : a < b;
  return result ? 'A' : 'B';
}

function solve(a, b, k) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i += 1) {
      if (parseInt(a[i], 10) !== parseInt(b[i], 10)) return compare(a, b, k);
    }
    return 'DRAW';
  } return compare(a.length, b.length, k);
}

function io(input) {
  for (let i = 1; i < input.length; i += 1) {
    const arr = input[i].split(' ');
    console.log(solve(arr[0], arr[1], arr[2]));
  }
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
