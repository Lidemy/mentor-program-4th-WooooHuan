import { Go } from '../Utils/gomoku';
import './GoButton.css';

// 落子按鈕元件
function GoButton({ board, game, setGame, position, shakeEffect }) {

  // 當按鈕被點擊時
  function onBtnClicked() {

    // 依照 position 在 board 物件上
    // 建立一個屬於該回合陣營的棋子
    board.setItem(
      new Go(game.faction),
      position
    )

    // 判斷這一手是否有達成連線
    // 有 → 結束遊戲；沒有 → 下一回合
    if (board.isConnected(position)) {
      game.gameOver();
    } else {
      game.nextRound();
    }
    setGame({ ...game });
    shakeEffect();          // 凡是有落子的場合，一定要，震一下。
  }

  return (
    <div
      className={`${game.faction}-go-btn`}
      onClick={onBtnClicked}
    ></div>
  );
}

export default GoButton;
