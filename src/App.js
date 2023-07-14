import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: "30%"
    }
    this.changePercent = this.changePercent.bind(this);
    /*
    this.name = "舊的名字"
    this.changeName = this.changeName.bind(this)//綁定自己
    */
  }

  changePercent() {
    this.setState({ percent: "70%" })
  }
  /*
  changeName(newName) {
    this.name = newName;
    console.log('hey');
  }

  render() {
    return (
      <button onClick={this.changeName}>
        {this.name}
      </button>
    );
  }
*/
  render() {
    return (
      <div>
        <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
          <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: this.state.percent, height: "100%", borderRadius: "10px" }}></div>
        </div>
        <button onClick={this.changePercent}>轉換百分比 </button>
      </div>
    );
  }
}
export default App;
