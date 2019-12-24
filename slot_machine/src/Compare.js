import React from 'react';
import ReactDOM from 'react-dom';
import Fruit from './Fruit';

function randLetter(){
  let rand=Math.random();
  if(0<=rand && rand<(1/3)) return 'A';
  if((1/3)<=rand && rand <(2/3)) return 'B';
  return 'C';
}
  
class Compare extends React.Component{
  render(){
    let letter1 = randLetter();
    let letter2 = randLetter();
    let letter3 = randLetter();
    let message;
    if(letter1==letter2 && letter2==letter3) message = <p>You win!</p>;
    else message = <p>You lose!</p>;
    return(
      <div>
        {message}
        <p>{letter1} {letter2} {letter3}</p>
      </div>
    )
  }
}

export default Compare;
