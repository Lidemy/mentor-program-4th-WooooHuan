import React from 'react';

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static add(a, b) {
    return new Vector2(a.x + b.x, a.y + b.y);
  }
  static subtract(a, b) {
    return new Vector2(a.x - b.x, a.y - b.y);
  }
}

class Game {
  constructor(onGameOver) {
    this.round = 0;
    this.isOver = false;
    this.onGameOver = onGameOver;
  }

  get faction() {
    return this.round % 2 ? 'white' : 'black';
  }
  nextRound() {
    this.round += 1;
  }
  gameOver() {
    this.isOver = true;
    this.onGameOver(this.faction);
  }
}

class Board {
  constructor(size, btnCmpt, blackGoCmpt, whiteGoCmpt) {
    const items = new Array(size);
    for (let i = 0; i < size; i++) {
      items[i] = new Array(size);
    }
    this.items = items;
    this.size = size;
    this.btnCmpt = btnCmpt;
    this.blackGoCmpt = blackGoCmpt;
    this.whiteGoCmpt = whiteGoCmpt;
  }
  getItem(pos) {
    return this.items[pos.x][pos.y];
  }
  setItem(go, pos) {
    this.items[pos.x][pos.y] = go;
  }
  getComponent(item) {
    if (item) {
      return item.faction === 'black' ?
        this.blackGoCmpt :
        this.whiteGoCmpt;
    }
    return this.btnCmpt;
  }
  getVisibleComponents() {
    const components = [];
    for (let x = 0; x < this.items.length; x++) {
      for (let y = 0; y < this.items[x].length; y++) {
        components.push(
          React.cloneElement(
            this.getComponent(this.items[x][y]), {
            key: `cmpt-${x}-${y}`,
            position: new Vector2(x, y),
            board: this
          }
          ));
      }
    }
    return components;
  }
  getStartPosition(pos, direction) {
    let startPos;
    while (this.isInRange(pos)) {
      startPos = pos;
      pos = Vector2.subtract(pos, direction);
    }
    return startPos;
  }
  getRowOfFaction(pos, direction) {
    const row = [];
    while (this.isInRange(pos)) {
      const item = this.getItem(pos);
      row.push(item ? item.faction : ' ');
      pos = Vector2.add(pos, direction);
    }
    return row;
  }
  isInRange(pos) {
    return Math.min(pos.x, pos.y) >= 0 &&
      Math.max(pos.x, pos.y) < this.size;
  }
  isConnected(pos) {
    const directions = [
      new Vector2(0, 1),
      new Vector2(1, 0),
      new Vector2(1, 1),
      new Vector2(1, -1)
    ]
    for (let direction of directions) {
      const faction = this.getItem(pos).faction;
      const startPos = this.getStartPosition(pos, direction);
      const row = this.getRowOfFaction(startPos, direction);
      if (row.join('').includes(faction.repeat(5))) {
        return true;
      }
    }
    return false;
  }
}

class Go {
  constructor(faction) {
    this.faction = faction;
  }
}

export { Vector2, Game, Board, Go };
