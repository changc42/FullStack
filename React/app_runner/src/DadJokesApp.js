import React, { Component } from 'react';
import Joke from './Joke';
import './DadJokesApp.css';
import axios from 'axios';

export default class DadJokesApp extends Component {
    static defaultProps = {
        initialLimit: 10,
    }
    state={
        jokes: [],
    }

async componentDidMount(){
    while(this.props.initialLimit>this.state.jokes.length){
        let response = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
        this.setState({jokes: [...this.state.jokes, response.data.joke]});
        this.setState({count: this.state.count+1});
    }
}


  render() {
    return (
      <div className="DadJokesApp">
          <h1>Dad Jokes</h1>
          <div>
              {this.state.jokes.map(e=><Joke joke={e}/>)}
          </div>
      </div>
    );
  }
}