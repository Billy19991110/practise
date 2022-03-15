import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


// const testFunction = () => {
// 	return (
// 		<div>
// 			<button>大家好</button>
// 			<h1>我不好</h1>
// 		</div>
// 	);
// }
// const showOne = true;
// const styleArgument = { fontSize: '100px', color: 'red' };
// const multiButton = () => {
// 	var output = [];
// 	for (let i = 0; i < 4; i++) {
// 		output.push(<button>我是第{i}個按鍵</button>)
// 	}
// 	return output;
// }
// const getValue = (event) => {
// 	console.log(event.target.value)
// }
function App() {
	return (
		<button>大家好</button>
	);
}

ReactDOM.render(
	// testFunction(),
	// <h1> {(showOne == true) ? 1 : 0} </h1>,
	// <h1 className='title' >Hellow, world!</h1>,
	// <div>
	// 	{multiButton()}
	// </div>,
	// <div>
	// 	<button value="true" onClick={getValue}>
	// 		按下以取得數值
	// 	</button>
	// </div>,
	<div>
		<App />
	</div>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
