import axios from 'axios';
import React from 'react';
import "./ZenQuote.css";

class ZenQuote extends React.Component{
    state = {
        quote: "default",
        isLoaded: false,
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                ()=>{
                    this.setState({quote: response.data, isLoaded: true,})
                }, 
                3000
            )
        });
    }
  render(){
    if(this.state.isLoaded) return (
        <div>
            <span>ZenQuote: {this.state.quote}</span>
        </div>
    );
    else return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
  }
}

export default ZenQuote;

