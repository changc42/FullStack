import React from 'react';
import ReactDom from 'react-dom';

import PokeCard from './PokeCard';
import './PokeCard.css';

import {mapIdToProps, mapNumToId} from './Maps';
import {randID, digit3} from "./staticFunctions";

import './PokeDex.css';


class PokeDex extends React.Component{
	render(){
		let cards = []
		for(let i=0; i<4; i++){
			let x = mapNumToId.get(randID());
			cards.push(<PokeCard name={mapIdToProps.get(x)[0]} img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3(x)}.png`} type={mapIdToProps.get(x)[1]}/>)
		}
		return(
			<div className="PokeDex">
				{cards}
			</div>
		)
	}
}

export default PokeDex;
