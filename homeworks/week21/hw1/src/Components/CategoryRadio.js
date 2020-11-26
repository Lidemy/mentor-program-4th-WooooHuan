import './CategoryRadio.css';

// 管理並回傳 radio 狀態，為了實現點擊 label 也能視為有效輸入，套了比較多層
function CategoryRadio({ category, setCategory }) {
  return (
    <div className="category-radio">
      <label className="input-category-cover">
        <input
          className="input-category category-all"
          value="all"
          name="category"
          type="radio"
          onChange={e => setCategory(e.target.value)}
          checked={category === 'all'}
        /> All
      </label>

      <label className="input-category-cover">
        <input
          className="input-category"
          value="todo"
          name="category"
          type="radio"
          onChange={e => setCategory(e.target.value)}
          checked={category === 'todo'}
        /> Todo
      </label>

      <label className="input-category-cover">
        <input
          className="input-category"
          value="done"
          name="category"
          type="radio"
          onChange={e => setCategory(e.target.value)}
          checked={category === 'done'}
        /> Done
      </label>
    </div>
  );
}

export default CategoryRadio;
