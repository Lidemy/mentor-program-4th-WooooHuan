const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
const maze = [];
const agents = [];
let goalX = 0;
let goalY = 0;
let reuslt = 0;

function navigate(agent) {
  if (agent[0] === goalY && agent[1] === goalX) return agent.pop();
  maze[agent[0]][agent[1]] = '*';
  for (let i = 0; i < 4; i += 1) {
    const y = i > 1 ? agent[0] : agent[0] - 1 + i * 2;
    const x = i > 1 ? agent[1] - 5 + i * 2 : agent[1];
    const legal = (y >= 0 && y <= goalY && x >= 0 && x <= goalX);
    if (legal && maze[y][x] === '.') agents.push([y, x, agent[2] + 1]);
  }
  return 0;
}

function solve() {
  agents.push([0, 0, 0]);
  while (reuslt === 0 && agents.length > 0) {
    reuslt = navigate(agents.shift());
  } return reuslt;
}

function io(input) {
  goalY = Number(input[0].split(' ')[0]) - 1;
  goalX = Number(input[0].split(' ')[1]) - 1;
  for (let i = 1; i < input.length; i += 1) {
    maze.push(input[i].split(''));
  }
  console.log(solve());
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
