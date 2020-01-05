import React from "react";
import axios from "axios";

class GithubUserInfo extends React.Component{
    static defaultProps ={
        username: "default",
      }
      state= {
        image: "default image",
        name: "default name",
      }
      async componentDidMount(){
        let response = await axios.get(`https://api.github.com/users/${this.props.username}`);
        console.log(response);
        this.setState({image: response.data.avatar_url, name: response.data.name});
      }
    render(){
      return (
        <div>
            <h1>GithubUserInfo</h1>
            <img src={this.state.image}/>
            <p>{this.state.name}</p>
        </div>
      );
    }
  }
  
  export default GithubUserInfo;