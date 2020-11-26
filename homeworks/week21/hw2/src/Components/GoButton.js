import { Go } from '../Utils/gomoku';
import './GoButton.css';

function GoButton({ board, game, setGame, position, shakeEffect }) {

  function onBtnClicked() {
    board.setItem(
      new Go(game.faction),
      position
    )
    if (board.isConnected(position)) {
      game.gameOver();
    } else {
      game.nextRound();
    }
    setGame({ ...game });
    shakeEffect();
  }

  return (
    <div
      className={`${game.faction}-go-btn`}
      onClick={onBtnClicked}
    ></div>
  );
}

export default GoButton;
