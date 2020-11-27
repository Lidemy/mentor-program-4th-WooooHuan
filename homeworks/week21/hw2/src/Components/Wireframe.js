import './Wireframe.css';

// for react element key
let gridKey = 0;

// 純粹負責畫棋盤
function Wireframe() {
  
  // grid 成員，這裡懶得模組化了
  // 直接填入 18 * 18 來繪製 19 路棋盤
  let gridItems = new Array(324);
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i] = <div className="grid-item" key={gridKey++}></div>
  }

  return (
    <div className="grid-transformer">
      <div className="grid-background">
        <div className="grid-container">
          {gridItems}
        </div>
      </div>
    </div>
  );
}

export default Wireframe;
