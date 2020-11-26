import React from 'react';

// 二維值，用來表達座標與向量
class Vector2 {
  // 建構式，接收 x, y 兩個參數
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // 靜態方法，向量相加
  static add(a, b) {
    return new Vector2(a.x + b.x, a.y + b.y);
  }
  // 靜態方法，向量相減
  static subtract(a, b) {
    return new Vector2(a.x - b.x, a.y - b.y);
  }
}

// 棋局，負責跟棋局有關的內容
class Game {
  // 建構式，接收一個在 GameOver 時呼叫的 function
  constructor(onGameOver) {
    this.round = 0;                 // 回合數
    this.isOver = false;            // 棋局是否結束
    this.onGameOver = onGameOver;   // 當期局結束時觸發的 function
  }

  // 依回合數回傳當時執子的陣營 (以黑子先下為前提)
  get faction() {
    return this.round % 2 ? 'white' : 'black';
  }
  // 進到下一回合
  nextRound() {
    this.round += 1;
  }
  // 棋局結束
  gameOver() {
    this.isOver = true;
    this.onGameOver(this.faction);
  }
}

// 棋盤，負責跟棋盤有關的內容 (本作業核心)
class Board {
  // 建構式，接收尺寸與相關元件
  constructor(size, btnCmpt, blackGoCmpt, whiteGoCmpt) {
    const items = new Array(size);
    for (let i = 0; i < size; i++) {
      items[i] = new Array(size);
    }
    this.items = items;               // 棋盤的二維陣列內容
    this.size = size;                 // 棋盤尺寸
    this.btnCmpt = btnCmpt;           // 落子元件，點擊後落子
    this.blackGoCmpt = blackGoCmpt;   // 黑子元件，落子後顯示的黑子
    this.whiteGoCmpt = whiteGoCmpt;   // 白子元件，落子後顯示的白子
  }
  // 回傳位於該座標的陣列內容，接收 Vector2 參數
  getItem(pos) {
    return this.items[pos.x][pos.y];
  }
  // 將棋子依座標寫入二維陣列中，接收 Go (棋子) 與 Vector2 參數
  setItem(go, pos) {
    this.items[pos.x][pos.y] = go;
  }
  // 負責將棋盤內容轉譯為「顯示用」元件，接收 item 參數 (即存於陣列中的內容)
  getComponent(item) {
    if (item) {
      return item.faction === 'black' ?
        this.blackGoCmpt :
        this.whiteGoCmpt;
    }
    return this.btnCmpt;
  }
  // 回傳「顯示用」的棋盤元件陣列，將記錄在棋盤中的資訊，轉換為顯示用的元件陣列
  getVisibleComponents() {
    const components = [];
    for (let x = 0; x < this.items.length; x++) {
      for (let y = 0; y < this.items[x].length; y++) {
        components.push(
          // 依照座標將 item 轉譯成相應的元件，同時對該元件進行 clone 與初始化 (設置 key 與 props)
          React.cloneElement(
            this.getComponent(this.items[x][y]),
            {
              key: `cmpt-${x}-${y}`,
              position: new Vector2(x, y),
              board: this
            }
          ));
      }
    }
    return components;
  }
  // 回傳「判斷連線用」的「起點座標」，接收兩個 Vector2 參數，前者代表座標，後者代表向量
  getStartPosition(pos, direction) {
    let startPos;
    // 以 pos 為起點，反覆進行向量減法，直到退至棋盤邊界
    while (this.isInRange(pos)) {
      startPos = pos;
      pos = Vector2.subtract(pos, direction);
    }
    return startPos;
  }
  // 獲取棋盤上「一整行」的「陣營資訊」，截至棋盤邊界為止
  // 接收兩個 Vector2 參數，前者代表「起點」座標，後者代表該直行的「延伸方向」
  getRowOfFaction(pos, direction) {
    const row = [];
    while (this.isInRange(pos)) {
      const item = this.getItem(pos);
      row.push(item ? item.faction : ' ');
      pos = Vector2.add(pos, direction);
    }
    return row;
  }
  // 判斷輸入的座標是否還在棋盤中，接收 Vector2 參數
  isInRange(pos) {
    return Math.min(pos.x, pos.y) >= 0 &&
      Math.max(pos.x, pos.y) < this.size;
  }
  // 判斷是否已達成連線，接收 Vector2 參數，代表該回合落子時的座標 (每次落子時進行判斷)
  isConnected(pos) {
    // 定義出檢查連線所需的四個方向
    const directions = [
      new Vector2(0, 1),
      new Vector2(1, 0),
      new Vector2(1, 1),
      new Vector2(1, -1)
    ]
    for (let direction of directions) {
      const faction = this.getItem(pos).faction;                // 該座標棋子的所屬陣營
      const startPos = this.getStartPosition(pos, direction);   // 依座標與向量，取得相應的「判斷連線起點」
      const row = this.getRowOfFaction(startPos, direction);    // 依起點與向量，取得一整行的陣營資訊 (陣列形式)
      if (row.join('').includes(faction.repeat(5))) {           // 將陣營陣列轉為字串資訊，檢查該字串是否包含所屬陣營 repeat 5 次的內容 (簡單暴力)
        return true;
      }
    }
    return false;
  }
}

// 棋子，當初想了很多，結果最後只存陣營資訊
class Go {
  // 建構式，接收陣營資訊
  constructor(faction) {
    this.faction = faction;
  }
}

export { Vector2, Game, Board, Go };
