const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function logResult(minA, minB, i) {
  console.log(minA[i] < minB[i] ? `${minA[0]} ${minA[1]}` : `${minB[0]} ${minB[1]}`);
  console.log(minA[i] > minB[i] ? `${minA[0]} ${minA[1]}` : `${minB[0]} ${minB[1]}`);
}

function getDist(a, b) {
  return ((a[0] - b[0]) ** 2) + ((a[1] - b[1]) ** 2);
}

function solve(arr) {
  let minDist = getDist(arr[0], arr[1]);
  let minA = arr[0];
  let minB = arr[1];
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      const dist = getDist(arr[i], arr[j]);
      if (dist < minDist) {
        minA = arr[i];
        minB = arr[j];
        minDist = dist;
      }
    }
  }
  logResult(minA, minB, minA[0] !== minB[0] ? 0 : 1);
}

function io(input) {
  const [, ...arr] = input;
  solve(arr.map(x => x.split(' ').map(n => Number(n))));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));

io(['4', '2 2', '1 1', '10 10', '100 100']);
io(['4', '2 3', '1 3', '1 2', '1 1']);
io(['2', '200 200', '21 21']);
io(['3', '0 0', '-1 -1', '0 1.41']);
io(['3', '0 0', '-1 1', '0 1.41']);
