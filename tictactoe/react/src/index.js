import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';



class Garage extends React.Component{
	render(){
		return(
			<h1>Garage knows Car sayrrs "{<Car />}"</h1>
		);
	}
}

ReactDOM.render(<Garage />, document.getElementById('root'));
