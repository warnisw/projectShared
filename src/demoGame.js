import React, {useState, useEffect} from 'react';
import gmit from './images/gmit.png';
import {default as Blur} from 'react-blur';

export default class demoGame extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        radius: '5'
      }
     
    }
    render() {
        
      return(
        <div>
          <h1 style={this.props.style}>Demo Game</h1>
          <p>
            Enter 3 letters to unlock image
          </p>
          <Blur className='blur-demo' img={gmit} blurRadius={10}>
                    BLUR RADIUS: {5}px
                </Blur>
        </div>
      );
    }
  }