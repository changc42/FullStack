import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {
    static defaultProps={
        joke: "Default",
    }
  render() {
    return (
        <div className="Joke">
            <div className="Joke_Scorer">
                <i className="fas fa-arrow-up fa-2x"></i>
                <span className="Joke_Score">10</span>
                <i className="fas fa-arrow-down fa-2x"></i>
            </div>
            <div className="Joke_Text">{this.props.joke}</div>
            
            <div className="Joke_Emoji">
                <i className="far fa-grin-squint-tears fa-2x"></i>
            </div>
        </div>
    );
  }
}
