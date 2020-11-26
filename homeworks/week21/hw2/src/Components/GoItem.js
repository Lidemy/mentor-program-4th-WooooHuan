import './GoItem.css';

function GoItem({ faction, position }) {
  return (
    <div
      className={`${faction}-go-item`}
      onClick={() => {
        console.log(`${faction}-go clicked`);
        console.log(position);
      }}
    >
      <div className="click-effect"></div>
      <div className="shadow-effect"></div>
    </div>
  );
}

export default GoItem;
