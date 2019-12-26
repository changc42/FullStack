import React from "react";
import "./App.css";

class App extends React.Component {
  foo() {
    alert("BOO");
  }
  render() {
    return (
      <div>
        <button onClick={this.foo}></button>
      </div>
    );
  }
}

export default App;
