const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(list) {
  let highest = 0;
  let popular = [];
  for (let i = 0; i < list.length; i += 1) {
    const info = list[i].split(' ');
    const score = Number(info[1]);
    if (score > highest) {
      highest = score;
      popular = [info[0]];
    } else if (score === highest) {
      popular.push(info[0]);
    }
  }
  popular.forEach(e => console.log(e));
}

function io(input) {
  solve(input.slice(1));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
