import React from 'react';
import ReactDom from 'react-dom';
import {mapIdToProps, mapNumToId, mapTypeToColor} from './Maps';





class PokeCard extends React.Component{
	static defaultProps = {
		name: "big chungus",
		type: "absolute unit",
		img: "https://vignette.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png/revision/latest?cb=20190126175151"
	}
	render(){
		console.log(mapTypeToColor);
		return(
			<div className="PokeCard" style={{backgroundColor: `${mapTypeToColor.get(this.props.type)}`}}>
				<h2>{this.props.name}</h2>
				<img src={this.props.img}/>
				<p style={{fontSize: "20px"}}>Type: {this.props.type}</p>
			</div>
		)
	}
}

export default PokeCard;
