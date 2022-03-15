import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const testFunction = () => {
  return (
    <div>
      <button>大家好</button>
      <h1>我不好</h1>
    </div>
  );
}

ReactDOM.render(
  testFunction(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
