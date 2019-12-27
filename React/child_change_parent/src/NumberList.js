import React from 'react';
import NumberItem from './NumberItem';

class NumberList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: [1,2,3,4,5],
        }
        this.remove = this.remove.bind(this);
    }

    remove(r){
        this.setState({numbers: this.state.numbers.filter(n => n!=r)});
    }

    render(){
        return (
            <div>
                <h1>Number List</h1>
                {this.state.numbers.map(n => <NumberItem num={n} remove={this.remove} />)}
            </div>
        );
    }
}

export default NumberList;