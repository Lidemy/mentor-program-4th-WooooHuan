const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function input(inputInfo) {
  console.log(inputInfo);
}

rl.on('line', line => lines.push(line));
rl.on('close', () => input(lines));
