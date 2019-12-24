import React from 'react';
import ReactDOM from 'react-dom';

let x = [1,2,3];

function increment(x){
  for(let i=0; i<x.length; i++){
    x[i]=x[i]+100;
  }
}

function helpful(){
  console.log("i did something helpful");
}

export {x, increment,helpful};
