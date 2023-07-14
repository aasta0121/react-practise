import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const printMessage = () => {
  document.getElementById('show-area').innerHTML = "我被按到了";
}

/*
root.render(
  <React.StrictMode>
    <App name="Aasta" handleClick={printMessage} />
    <div id="show-area"></div>
  </React.StrictMode>
);
*/

root.render(
  <React.StrictMode>
    <App>在index.js中設定文字</App>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
