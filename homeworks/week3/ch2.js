const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
const priceArr = [];
const weightArr = [];
const bagP = [];
const bagW = [];
let limit = 0;

function putInBag(p, w) {
  if (w > limit) return;
  for (let i = 0; i < bagP.length; i += 1) {
    if (w === bagW[i] && p <= bagP[i]) return;
  }
  bagP.push(p);
  bagW.push(w);
}

function solve() {
  for (let i = 0; i < lines.length - 1; i += 1) {
    const round = bagP.length;
    for (let j = -1; j < round; j += 1) {
      putInBag(priceArr[i] + (bagP[j] || 0), weightArr[i] + (bagW[j] || 0));
    }
  } return Math.max.apply(null, bagP);
}

function io(input) {
  limit = Number(input[0].split(' ')[1]);
  for (let i = 1; i < input.length; i += 1) {
    priceArr.push(Number(input[i].split(' ')[1]));
    weightArr.push(Number(input[i].split(' ')[0]));
  }
  console.log(solve());
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
