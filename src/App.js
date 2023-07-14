import logo from './logo.svg';
import './App.css';

function App0() {
  return (
    <button>大家好</button>
  );
}

/* 第一個練習 Start */
const styleArgument = { backgroundColor: 'black', color: 'white' };
const getValue = (value) => {
  console.log(value)
}

const multiButton = () => {
  var output = [];
  for (let i = 0; i < 4; ++i) {
    output.push(
      <button
        value={i}
        style={styleArgument}
        onClick={(event) => { getValue(event.target.value) }}>
        我是第{i}個按鍵
      </button>
    )
  }
  return output;
}

function App1() {
  return (<div>{multiButton()}</div>)
}

/* 第一個練習 End */

/* 第二個練習 Start */
function App2() {
  const barWidth = "50%";
  return (
    <div>
      <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
        <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: barWidth, height: "100%", borderRadius: "10px" }}></div>
      </div>
    </div>
  );
}
/* 第二個練習 End */


/* 第三個練習 Start */
//props是唯讀變數
function App3(props) {
  return (
    <button>{props.name},我{props.age}歲</button>
  );
}
/* 第三個練習 End */

/* 第四個練習 Start */
//props是唯讀變數
function App4(props) {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  );
}
/* 第四個練習 End */

/* 第五個練習 Start */
//children常用來做Layout
function App(props) {
  return (
    <button>{props.children}</button>
  );
}
/* 第五個練習 End */
export default App;
