import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  render(){
    let objectArr = [1,34,52,32,12,3];
    let x = objectArr.reduce((total, num) => total+=num, 0);

    console.log(x);

    return "x";
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
