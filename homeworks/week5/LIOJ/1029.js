/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function io(input) {
  console.log(eval(input[0]));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
