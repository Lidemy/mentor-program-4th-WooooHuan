const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
const maze = [];
const agents = [];
let startPos;
let goalPos;
let reuslt = 0;

function setSign(pos, sign = ' ') {
  maze[pos[0]][pos[1]] = sign;
} // 輸入座標，寫入地圖在該座標的內容（字符）

function getSign(pos) {
  return maze[pos[0]][pos[1]];
} // 輸入座標，回傳地圖在該座標的內容（字符）

function getAroundPos(pos) {
  const searchResult = [];
  for (let i = 0; i < 4; i += 1) {
    const y = i > 1 ? pos[0] : pos[0] - 1 + i * 2;
    const x = i > 1 ? pos[1] - 5 + i * 2 : pos[1];
    if (x >= 0 && x < maze[0].length && y >= 0 && y < maze.length) searchResult.push([y, x]);
  } return searchResult;
} // 輸入座標，回傳周遭四個座標。順序：上、下、左、右

function getAroundTargetPos(pos, target = 'A-Z') {
  const searchResult = getAroundPos(pos);
  for (let i = 0; i < searchResult.length; i += 1) {
    if (target === 'A-Z') {
      if (/[A-Z]/.test(getSign(searchResult[i]))) return searchResult[i];
    } if ((getSign(searchResult[i]) === target)) return searchResult[i];
  } return false;
} // 輸入座標，從該座標周遭尋找目標，預設搜尋目標為大寫英文字母

function findTargetPos(target) {
  const searchResult = [];
  for (let i = 0; i < maze.length; i += 1) {
    for (let j = 0; j < maze[i].length; j += 1) {
      if (maze[i][j] === target) searchResult.push([i, j]);
    }
  } return searchResult.length > 0 ? searchResult : false;
} // 輸入一個字符，回傳符合目標的座標陣列（複數座標）

function findSignsExitWayPos(signA, signB) {
  const signACasePosArr = findTargetPos(signA);
  for (let i = 0; i < signACasePosArr.length; i += 1) {
    const tmpSignB = getSign(getAroundTargetPos(signACasePosArr[i]));
    if (tmpSignB === signB) {
      const posA = signACasePosArr[i];
      const posB = getAroundTargetPos(signACasePosArr[i]);
      setSign(posA, '-');
      setSign(posB, '-');
      return getAroundTargetPos(posA, '.') || getAroundTargetPos(posB, '.');
    }
  } return false;
} // 輸代表入口的兩個英文字母，回傳出口的 '.' 座標

function getTheOtherSidePos(pos) {
  const signA = getSign(pos);
  const signBPos = getAroundTargetPos(pos);
  const signB = getSign(signBPos);
  setSign(pos, '-');
  setSign(signBPos, '-');
  return findSignsExitWayPos(signA, signB);
} // 輸入入口旁的英文座標，回傳出口的 '.' 座標

function navigate(agent) {
  if (agent[0] === goalPos[0] && agent[1] === goalPos[1]) return agent.pop();
  setSign([agent[0], agent[1]], '*');
  const aroundPos = getAroundPos(agent);
  for (let i = 0; i < aroundPos.length; i += 1) {
    const nextSign = getSign(aroundPos[i]);
    if (nextSign === '.') {
      agents.push([aroundPos[i][0], aroundPos[i][1], agent[2] + 1]);
    } else if (/[A-Z]/.test(nextSign)) {
      const exitPos = getTheOtherSidePos(aroundPos[i]);
      agents.push([exitPos[0], exitPos[1], agent[2] + 1]);
    }
  } return 0;
} // 尋路，搜尋周遭座標可走的路徑，找到英文字母就進行跳躍處理，走到終點則回傳步數

function solve() {
  agents.push([startPos[0], startPos[1], 0]);
  while (reuslt === 0 && agents.length > 0) {
    reuslt = navigate(agents.shift());
  } return reuslt;
} // Loooooooooooooooop

function io(input) {
  for (let i = 0; i < input.length; i += 1) {
    maze.push(input[i].split(''));
  }
  startPos = findSignsExitWayPos('A', 'A');
  goalPos = findSignsExitWayPos('Z', 'Z');
  console.log(`Result : ${solve()}`);
} // 慣例的參數初始化以及 io 處理

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
