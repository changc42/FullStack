import React from 'react';
import ReactDom from 'react-dom';
import PokeCard from './PokeCard';
import {mapIdToProps, mapNumToId} from './Maps';
import './PokeCard.css';
import PokeDex from './PokeDex';
import PokeGame from './PokeGame';
import './PokeGame.css';



class App extends React.Component{
	render(){


		return(
			<PokeGame />
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));
