const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(from, end) {
  const result = [];
  for (let i = from; i < end + 1; i += 1) {
    let tmp = 0;
    const str = i.toString();
    for (let j = 0; j < str.length; j += 1) {
      tmp += parseInt(str[j], 10) ** str.length;
    }
    if (tmp.toString() === str) result.push(i);
  }
  console.log(result.join('\n'));
}

function io(input) {
  const info = input[0].split(' ').map(x => Number(x));
  solve(info[0], info[1]);
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
