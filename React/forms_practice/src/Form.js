import React from 'react';

class Form extends React.Component{
    static defaultProps={
        
    }
    constructor(props){
        super(props);
        this.state={
            username: "",
            email: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    handleSubmit(evt){
        alert(`you typed ${this.state.username}`);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="username"/>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="email"/>
                    <button>no</button>
                </form>
            </div>
        )
    }
}

export default Form;