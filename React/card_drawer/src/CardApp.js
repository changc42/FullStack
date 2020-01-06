import React, { Component } from 'react';
import CardPile from './CardPile';
import axios from 'axios';

export default class CardApp extends Component {
    state={
        cards:[],
        deckId: "default",
    }
    componentDidMount(){
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(response => {
            this.setState({deckID: response.data.deck_id});
        });
    }

    dealCard=this.dealCard.bind(this);
    async dealCard(evt){
        if(this.state.cards.length>=52){
            alert("no more cards!");
            return;
        }
        evt.target.disabled=true;
        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`)
        evt.target.disabled=false;
        this.setState({cards: [...this.state.cards, response.data.cards[0].images.svg]});
        
    }
  render() {
    return (
      <div>
          <h1>Card Dealer</h1>
          <button id="button" onClick={this.dealCard}>gimme a card</button>
          <CardPile cards={this.state.cards}/>
      </div>
    );
  }
}
