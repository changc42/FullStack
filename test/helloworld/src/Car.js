import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
	render(){
		return <h1>I am a {this.props.color} car!</h1>;
	}
}

export default Car;
