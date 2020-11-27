import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import LazyForm from './Components/LazyForm';

// 單純為了實現樣式切出來的容器
function MainContainer() {
  return (
    <div>
      <div className="form-container">
        <div className="form-area">
          <div className="form-top-line"></div>
          <div className="form-main">
            <LazyForm />
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <footer>© 2020 © Copyright. All rights Reserved.</footer>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
