import React from 'react';
import ReactDom from 'react-dom';

import PokeCard from './PokeCard';
import './PokeCard.css';

import {mapIdToProps, mapNumToId} from './Maps';
import {randID, digit3} from "./staticFunctions";

import PokeDex from './PokeDex';
import './PokeDex.css';

class PokeGame extends React.Component{
  render(){
    let cards1 = []
    let totalExp1=0;
		for(let i=0; i<4; i++){
			let x = mapNumToId.get(randID());
			totalExp1 += mapIdToProps.get(x)[2];
			cards1.push(<PokeCard
				name={mapIdToProps.get(x)[0]}
				img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3(x)}.png`}
				type={mapIdToProps.get(x)[1]}
				exp={mapIdToProps.get(x)[2]}
			/>)
		}

    let cards2 = []
    let totalExp2=0;
		for(let i=0; i<4; i++){
			let x = mapNumToId.get(randID());
			totalExp2 += mapIdToProps.get(x)[2];
			cards2.push(<PokeCard
				name={mapIdToProps.get(x)[0]}
				img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3(x)}.png`}
				type={mapIdToProps.get(x)[1]}
				exp={mapIdToProps.get(x)[2]}
			/>)
		}

    let message1, message2;
    if(totalExp1>totalExp2){
      message1 = <h1 id="winner">Winner!</h1>;
      message2 = <h1 id="loser">Loser!</h1>;
    }
    else if(totalExp1<totalExp2){
      message1 = <h1 id="loser">Loser!</h1>;
      message2 = <h1 id="winner">Winner!</h1>;
    }
    else{
      message1 = <h1 id="tie">Draw</h1>;
      message2 = <h1 id="tie">Draw</h1>;
    }

    return(
      <div>
        {message1}
        <PokeDex totalExp={totalExp1} cards={cards1}/>
        {message2}
        <PokeDex totalExp={totalExp2} cards={cards2}/>
      </div>
    )
  }
}

export default PokeGame;
