/* eslint-disable */

let counter = 0;

function isTokenValid(token, h, m) {
  const a = h * m + 42;
  let count = 0;
  for (let i = 0; i < 8; i++) {
    count += token[i].charCodeAt(0) - 65;
  }
  if (count <= 100) return false;
  return (a % count) === 0;
}

function getToken(n) {
  const quo = Math.ceil(n / 8);
  const qc = String.fromCharCode(Math.ceil(n / 8) + 65);
  const rc = String.fromCharCode((n % quo) + 65);
  return qc.repeat(7) + rc;
}

function decode(h, m, a) {
  for (let k = 101; k < 200; k++) {
    if ((a % k) === 0) {
      const token = getToken(k);
      if (isTokenValid(token, h, m)) {
        counter += 1;
        console.log(`${counter}. count: ${k} -> "${token}" -> ${h} : ${m} `);
      }
    }
  }
}

function awake() {
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      const a = i * j + 42;
      if (a <= 100) continue;
      decode(i, j, a);
    }
  }
}

awake();
