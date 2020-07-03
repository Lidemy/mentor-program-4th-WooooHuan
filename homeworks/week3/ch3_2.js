const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
const agents = [];
const maze3D = [];
const keyGatePos = [];
let startPos;
let goalPos;
let reuslt = 0;

function setSign(pos, sign = ' ') {
  maze3D[pos[2]][pos[0]][pos[1]] = sign;
} // 輸入座標，寫入地圖在該座標的內容（字符）

function getSign(pos) {
  return maze3D[pos[2]][pos[0]][pos[1]];
} // 輸入座標，回傳地圖在該座標的內容（字符）

function isOutside(pos) {
  return pos[0] < 35 || pos[0] > 87 || pos[1] < 35 || pos[1] > 93;
} // 確認座標是否在外側，範圍參考題目寫死，還有改進空間（懶

function isPosEqual(posA, posB) {
  return posA[0] === posB[0] && posA[1] === posB[1] && posA[2] === posB[2];
} // 確認輸入座標是否相等

function removeKeyGate(lv) {
  if (lv > 0) {
    for (let i = 0; i < keyGatePos.length; i += 1) {
      const tmpPos = [keyGatePos[i][0], keyGatePos[i][1], lv];
      setSign(tmpPos, '-');
    }
  }
} // 移除第二層以上的關鍵出入口

function checkMaze(lv) {
  if (maze3D[lv] === undefined) {
    maze3D[lv] = [];
    for (let i = 0; i < lines.length; i += 1) {
      maze3D[lv].push(lines[i].split(''));
    }
  }
  removeKeyGate(lv);
} // 確認迷宮是否存在，不存在就建立新的

function removeOutSideGate() {
  for (let i = 0; i < maze3D[0].length; i += 1) {
    for (let j = 0; j < maze3D[0][0].length; j += 1) {
      if (/[A-Z]/.test(maze3D[0][i][j]) && isOutside([i, j, 0])) setSign([i, j, 0], '-');
    }
  }
} // 移除第一層的外層出入口

function getAroundPos(pos) {
  const searchResult = [];
  for (let i = 0; i < 4; i += 1) {
    const y = i > 1 ? pos[0] : pos[0] - 1 + i * 2;
    const x = i > 1 ? pos[1] - 5 + i * 2 : pos[1];
    if (x >= 0 && x < maze3D[0][0].length && y >= 0 && y < maze3D[0].length) {
      searchResult.push([y, x, pos[2]]);
    }
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

function findTargetPos(target, lv) {
  const searchResult = [];
  for (let i = 0; i < maze3D[0].length; i += 1) {
    for (let j = 0; j < maze3D[0][i].length; j += 1) {
      if (maze3D[lv][i][j] === target) searchResult.push([i, j, lv]);
    }
  } return searchResult.length > 0 ? searchResult : false;
} // 輸入一個字符，回傳符合目標的座標陣列（複數座標）

function findSignsExitWayPos(signA, signB, signAPos = [0, 0, 0]) {
  const signACasePosArr = findTargetPos(signA, signAPos[2]);
  for (let i = 0; i < signACasePosArr.length; i += 1) {
    const tmpSignB = getSign(getAroundTargetPos(signACasePosArr[i]));
    if (tmpSignB === signB && !isPosEqual(signAPos, signACasePosArr[i])) {
      const posA = signACasePosArr[i];
      const posB = getAroundTargetPos(signACasePosArr[i]);
      setSign(posA, '-');
      setSign(posB, '-');
      if ((signA === 'A' && tmpSignB === 'A') || (signA === 'Z' && tmpSignB === 'Z')) {
        keyGatePos.push(posA);
        keyGatePos.push(posB);
      }
      return getAroundTargetPos(posA, '.') || getAroundTargetPos(posB, '.');
    }
  } return false;
} // 輸入代表入口的兩個英文字母，回傳出口的 '.' 座標

function getTheOtherSidePos(pos) {
  const signA = getSign(pos);
  const signBPos = getAroundTargetPos(pos);
  const signB = getSign(signBPos);
  setSign(pos, '-');
  setSign(signBPos, '-');
  const nextLv = isOutside(pos) ? pos[2] - 1 : pos[2] + 1;
  checkMaze(nextLv);
  return findSignsExitWayPos(signA, signB, [pos[0], pos[1], nextLv]);
} // 輸入入口旁的英文座標，回傳出口的 '.' 座標

function navigate(agent) {
  const agentPos = [agent[0], agent[1], agent[2]];
  if (isPosEqual(agentPos, goalPos)) return agent.pop();
  setSign(agentPos, '*');
  const aroundPos = getAroundPos(agentPos);
  for (let i = 0; i < aroundPos.length; i += 1) {
    const nextSign = getSign(aroundPos[i]);
    if (nextSign === '.') {
      agents.push([aroundPos[i][0], aroundPos[i][1], agent[2], agent[3] + 1]);
    } else if (/[A-Z]/.test(nextSign)) {
      if (agent[2] !== 0 || !isOutside(aroundPos[i])) {
        const exitPos = getTheOtherSidePos(aroundPos[i]);
        agents.push([exitPos[0], exitPos[1], exitPos[2], agent[3] + 1]);
      }
    }
  } return 0;
} // 尋路，搜尋周遭座標可走的路徑，找到英文字母就進行跳躍處理，走到終點則回傳步數

function solve() {
  agents.push([startPos[0], startPos[1], startPos[2], 0]); // y, x, z, step
  while (reuslt === 0 && agents.length > 0) {
    reuslt = navigate(agents.shift());
  } return reuslt;
} // Loooooooooooooooop

function io() {
  checkMaze(0);
  startPos = findSignsExitWayPos('A', 'A');
  goalPos = findSignsExitWayPos('Z', 'Z');
  removeOutSideGate();
  console.log(`Result : ${solve()}`);
} // 慣例的參數初始化以及 io 處理

rl.on('line', line => lines.push(line));
rl.on('close', () => io());
