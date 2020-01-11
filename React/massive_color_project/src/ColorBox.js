import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ColorBox extends Component {
    static defaultProps={
        color: "red",
        name: "red",
    }

    state = {
      copied: false,
    }

handleClick=this.handleClick.bind(this);
handleClick(){
  this.setState({copied: true});
  setTimeout(
    ()=>this.setState({copied: false}),
     1500
  );
}

  render() {
      let {color, name} = this.props;
    return (
      <CopyToClipboard text={this.props.color} onCopy={this.handleClick}>
        <div style={{backgroundColor: color}} className="ColorBox">
          <div style={{backgroundColor: color}} className={`copy-overlay ${this.state.copied && "show"}`}/>
          <div className={`copy-msg ${this.state.copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{this.props.color}</p>
          </div>
          <div className="Copy_Container">
              <div className="box-content">
                  <span>{name}</span>
              </div>
              <button className="ColorBox_Copy">Copy</button>
          </div>
          <span className="see-more">MORE</span>
        </div>
      </CopyToClipboard>
        
    );
  }
}
