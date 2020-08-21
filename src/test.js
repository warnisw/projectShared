import React, {useState, useEffect} from 'react';


export default class Cat extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        humor: 'happy'
      }
     
    }
    render() {
        
      return(
        <div>
          <h1 style={this.props.style}>{this.props.name}</h1>
          <p>
            {this.props.color}
          </p>
        </div>
      );
    }
  }