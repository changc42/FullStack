import React from 'react';
import ReactDom from 'react-dom';
import './Die.css';

class Die extends React.Component{
	static defaultProps ={
		class: "fas fa-dice-one fa-10x",
		rolling: false,
	}
	render(){
		return(
			<div className={`Die ${this.props.rolling? 'shaking':''}`}>
				<i className={this.props.class}></i>
			</div>
		)
	}
}

export default Die;
