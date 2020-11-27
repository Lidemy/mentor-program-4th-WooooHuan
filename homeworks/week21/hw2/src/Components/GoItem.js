import './GoItem.css';

// 棋子元件，透過 props 決定陣營
// 酷炫的落子特效都放在這裡
function GoItem({ faction, position }) {
  return (
    <div className={`${faction}-go-item`}>
      <div className="click-effect"></div>
      <div className="shadow-effect"></div>
    </div>
  );
}

export default GoItem;
