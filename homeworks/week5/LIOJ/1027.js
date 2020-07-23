const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  const n16 = arr.pop();
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      sum += arr[i] * 2 >= 10 ? arr[i] * 2 - 9 : arr[i] * 2;
    } else {
      sum += arr[i];
    }
  }
  const checkNum = sum % 10 === 0 ? 0 : 10 - (sum % 10);
  if (checkNum === n16) {
    return arr[0] === 5 ? 'MASTER_CARD' : 'VISA';
  } return 'INVALID';
}

function io(input) {
  console.log(solve(input[0].split('-').join('').split('').map(x => Number(x))));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
