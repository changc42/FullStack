import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {
    static defaultProps={
        joke: "Default",
        score: 0,
        id: "default id",
        upvote: () => console.log("default"),
        downvote: () => console.log("default down"),
    }

    handleUp=this.handleUp.bind(this);
    handleUp(){
        this.props.upvote(this.props.id);
    }

    handleDown=this.handleDown.bind(this);
    handleDown(){
        this.props.downvote(this.props.id);
    }

  render() {
      let emoji;
      let {score} = this.props;

      if(score<0) emoji = <i class="fas fa-angry fa-2x"></i>;
      if(score==0) emoji = <i class="far fa-meh-blank fa-2x"></i>;
      if(score>=1 && score <=4) emoji = <i class="far fa-smile fa-2x"></i>;
      if(score>=5 && score<=9) emoji = <i class="far fa-laugh-squint fa-2x"></i>;
      if(score>=10) emoji = <i class="far fa-grin-squint-tears fa-2x"></i>;
    return (
        <div className="Joke">
            <div className="Joke_Scorer">
                <i onClick={this.handleUp} className="fas fa-arrow-up fa-2x"></i>
                <span className="Joke_Score">{this.props.score}</span>
                <i onClick={this.handleDown} className="fas fa-arrow-down fa-2x"></i>
            </div>
            <div className="Joke_Text">{this.props.joke}</div>
            
            <div className="Joke_Emoji">
                {emoji}
            </div>
        </div>
    );
  }
}
