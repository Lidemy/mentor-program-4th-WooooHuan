import './Wireframe.css';

let gridKey = 0;

function Wireframe() {
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
