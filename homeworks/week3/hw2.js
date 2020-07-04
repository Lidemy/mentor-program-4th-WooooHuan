const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(from, end) {
  for (let i = from; i < end + 1; i += 1) {
    let tmp = 0;
    const str = i.toString();
    for (let j = 0; j < str.length; j += 1) {
      tmp += parseInt(str[j], 10) ** str.length;
    }
    if (tmp.toString() === str) console.log(i);
  }
}

function io(input) {
  const range = input[0].split(' ').map(x => parseInt(x, 10));
  solve(range[0], range[1]);
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
