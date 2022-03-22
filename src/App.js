// import React from "react";

// function App(props) {
//   return (
//     <button onClick={props.handleCilck}>{props.name}</button>
//   );
// }
// export default App;

// import React from "react";
// function App(props) {
//   return (
//     <button>{props.children}</button>
//   )
// }
// export default App;

// import React, { Component } from 'react';
// class App extends Component {
//   state = {}
//   render() {
//     return (
//       <button onCilck={this.props.handleClick}>{this.props.name}</button>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.name = "舊的名字";
//     this.changeName = this.changeName.bind(this);
//   }
//   changeName(newName) {
//     this.name = newName;
//     console.log("hey")
//   }
//   render() {
//     return (
//       <button onClick={this.changeName}>{this.name}</button>
//     )
//   }
// }

// export default App;

import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleData: {
        width: "30%",
        height: "50%"
      }
    }
    this.changePercent = this.changePercent.bind(this);
  }
  changePercent() {
    let counter = 5;
    this.setState({
      styleData: {
        width: "70%",
        height: this.state.styleData.height
      }
    });
  }
  render() {
    return (
      <div>
        <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
          <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: this.state.percent, height: "100%", borderRadius: "10px" }}>
          </div>
        </div>
        <button onClick={this.changePercent}>轉換百分比</button>
      </div>
    );
  }
}

export default App;