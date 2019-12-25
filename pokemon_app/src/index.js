import React from 'react';
import ReactDom from 'react-dom';
import PokeCard from './PokeCard';
import {mapIdToProps, mapNumToId} from './Maps';
import './PokeCard.css';
import PokeDex from './PokeDex';



class App extends React.Component{
	render(){


		return(
			<div>
				<PokeDex />
				<PokeDex />
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));
