import React from 'react';
import ReactDom from 'react-dom';
import Die from './Die.js';
import mapNumToText from './Maps.js';
import './DiceRoller.css';

class DiceRoller extends React.Component{
	state = {
		class1: "fas fa-dice-one fa-10x",
		class2: "fas fa-dice-two fa-10x",
		rolling: false,
	}
	roll = this.roll.bind(this);

	roll(){
		let num1 = Math.floor(Math.random()*6 +1);
		let num2 = Math.floor(Math.random()*6 +1);
		this.setState({
			class1: `fas fa-dice-${mapNumToText.get(num1)} fa-10x`,
			class2: `fas fa-dice-${mapNumToText.get(num2)} fa-10x`,
			rolling: true,
		})
		setTimeout( ()=>this.setState({rolling:false,}) , 1000);
	}
	render(){
		return(
			<div>
				<div className="DiceRoller_Dice">
					<Die class={this.state.class1} rolling={this.state.rolling}/>
					<Die class={this.state.class2} rolling={this.state.rolling}/>
				</div>
				<div className="DiceRoller_Button">
					<button onClick={this.roll} disabled={this.state.rolling}> {this.state.rolling? "Rolling..." : "Roll Dice"} </button>
				</div>
			</div>
		)
	}
}

export default DiceRoller;
