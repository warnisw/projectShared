import React, {useState, useEffect} from 'react';
import bird from './images/bird.jpg';
import {default as Blur} from 'react-blur';

export default class demoGame extends React.Component {
    constructor(props) {
      super(props);  
      this.state = {
        l1: '',
        l2: '',
        l3: ''
      }  
      this.handleEL1 = this.handleEL1.bind(this);
      this.handleEL2 = this.handleEL2.bind(this);
      this.handleEL3 = this.handleEL3.bind(this);      
    }  
    handleEL1 (evt) {
   
      this.setState({ l1: evt.target.value });
    }
    handleEL2 (evt) {
      //if (l2.length === 1 && l1.match(/[a-z]/i) {
       // alert("errror");
      //}
      this.setState({ l2: evt.target.value });
    }
    handleEL3 (evt) {
      //if (l3.length === 1 && l1.match(/[a-z]/i) {
      //  alert("errror");
     // }
      this.setState({ l3: evt.target.value });
    }

  displayimage(){
    return <img src={bird} alt="Bird" />;
  }
    render() {
      this.password = true;
        console.log(this.password)
      return(
        <div className="outer">
          <h1 style={this.props.style}>Demo Game</h1>          
          
          <p>
            Enter 3 letters to unlock image
          </p> 
          <div className="progress" style={{width: 300}} onClick={this.displayimage} >
          <Blur className='' img={bird} blurRadius={20} > </Blur>
          
          {this.password ? <img src={bird} alt="Bird" /> : null}
          </div>  
          <div class="bg-img">
          <form>
      
          <label>_</label>
          <input type="text" name="l1" onChange={this.handleEL1} />          
          <label>_</label>
          <input type="text" name="l2" onChange={this.handleEL2} />
          <label>_</label>
          <input type="text" name="l3" onChange={this.handleEL3} />
          
          
        </form>
          </div> 
        </div>
    

      );
    }
  }