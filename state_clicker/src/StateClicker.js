import React from 'react';
import ReactDom from 'react-dom';

class StateClicker extends React.Component{
	state = {
		number: 1
	}
	changeNumber = this.changeNumber.bind(this);

	changeNumber(){
		this.setState({number: Math.floor(Math.random()*10 +1)});
	}

	render(){
		return(
			<div>
				<h1>Number: {this.state.number}</h1>
				{this.state.number==7? <h1>You win!</h1> : <button onClick={this.changeNumber}>Random Number</button>}
			</div>
		)

	}
}

export default StateClicker;
