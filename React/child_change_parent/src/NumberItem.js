import React from 'react';

class NumberItem extends React.Component{
    static defaultProps={
        num: 0,
    }

    handleRemove = this.handleRemove.bind(this);
    handleRemove(){
        this.props.remove(this.props.num);
    }

  render(){
    return (
        <div>
            <span>{this.props.num}</span>
            <button onClick={this.handleRemove}>X</button>
        </div>
    );
  }
}

export default NumberItem;
