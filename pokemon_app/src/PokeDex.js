import React from 'react';
import ReactDom from 'react-dom';

import PokeCard from './PokeCard';
import './PokeCard.css';

import {mapIdToProps, mapNumToId} from './Maps';
import {randID, digit3} from "./staticFunctions";

import './PokeDex.css';


class PokeDex extends React.Component{
	static defaultProps ={
		cards: "null",
		totalExp: 0
	}
	render(){
		return(
			<div className="PokeDex">
				<div className="PokeDex_Text">
					<h3>Total exp: {this.props.totalExp}</h3>
				</div>
				<div className="PokeDex_Cards">
					{this.props.cards}
				</div>
			</div>
		)
	}
}

export default PokeDex;
