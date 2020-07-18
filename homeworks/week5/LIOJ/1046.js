const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(info) {
  for (let i = 0; i < info.length; i += 1) {
    if (info[i][0] === info[i][1] && info[i][1] === info[i][2]) return info[i][0];
    if (info[0][i] === info[1][i] && info[1][i] === info[2][i]) return info[0][i];
  }
  if (info[0][0] === info[1][1] && info[1][1] === info[2][2]) return info[1][1];
  if (info[0][2] === info[1][1] && info[1][1] === info[2][0]) return info[1][1];
  return 'DRAW';
}

function io(input) {
  const info = input.map(x => x.split(''));
  console.log(solve(info));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
