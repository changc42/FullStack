import React, { Component } from 'react';
import './CardPile.css';

export default class CardPile extends Component {
    static defaultProps={
        cards:[],
    }
    state={
        offset: 0,
    }
  render() {
    return (
      <div>
          {this.props.cards.map(e=>{
              let output = <img className="CardPile_img" style={{marginLeft: `${this.props.cards.indexOf(e)*10}px`}} src={e} />;
            console.log(output);
            return output;
          })}
      </div>
    );
  }
}
