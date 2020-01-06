import React, { Component } from 'react';
import Joke from './Joke';
import './DadJokesApp.css';
import axios from 'axios';
import uuid from 'uuid/v4';

export default class DadJokesApp extends Component {
    static defaultProps = {
        initialLimit: 10,
    }
    state={
        jokeBars: JSON.parse(window.localStorage.getItem("jokes")) || [],
        isLoaded: false,
    }

    upvote = this.upvote.bind(this);
    upvote(id){
        let index = this.state.jokeBars.map(e=>e.id).indexOf(id);
        let temp = this.state.jokeBars;
        temp[index].score += 1;
        this.setState({jokeBars: temp});
    }

    downvote=this.downvote.bind(this);
    downvote(id){
        let index = this.state.jokeBars.map(e=>e.id).indexOf(id);
        let temp = this.state.jokeBars;
        temp[index].score -= 1;
        this.setState({jokeBars: temp});
    }

    getNewJokes = this.getNewJokes.bind(this);
    getNewJokes(){
        this.setState({isLoaded: false, jokeBars: []});
        this.getJokes();
    }

    getJokes = this.getJokes.bind(this);
    async getJokes(){
        this.setState({isLoaded:false});
        while(this.props.initialLimit>this.state.jokeBars.length){
            let response = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
            let isUnique = true;
            this.state.jokeBars.forEach(e=>{
                if(response.data.joke==this.state.jokeBars.joke) isUnique=false;
            });
            if(isUnique){
                this.setState({
                    jokeBars: [
                        ...this.state.jokeBars, 
                        {joke: response.data.joke, score:0, id:uuid()}
                    ]
                });
            }
        }
        this.setState({isLoaded: true});
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokeBars));
    }

    async componentDidMount(){
        this.getJokes();
    }


  render() {
      //sort jokes by score
      let sortedJokes = [];
      let{jokeBars} = this.state;
      let temp = jokeBars.slice(0);
      let idOfMax;

      //one-by-one, move max element from temp to sortedJokes
      while(temp.length>0){
        let max=Number.MIN_SAFE_INTEGER;
        for(let j=0; j<temp.length; j++){
            if(temp[j].score>max){
                max=temp[j].score;
                idOfMax=temp[j].id;
            }
        }
        temp.splice(temp.map(e=>e.id).indexOf(idOfMax),1);
        sortedJokes.push(jokeBars[jokeBars.map(e=>e.id).indexOf(idOfMax)]);
      }
    return (
      <div className="DadJokesApp">
        <h1>Dad Jokes</h1>
        <button onClick={this.getNewJokes}>Get new jokes</button>
        {this.state.isLoaded?(
            <div>
                {sortedJokes.map(e=><Joke downvote={this.downvote} upvote={this.upvote} id={e.id} joke={e.joke} score={e.score}/>)}
            </div>
            ):(
                <i class="fas fa-spinner fa-10x rotate"></i>
        )}
      </div>
    );
  }
}