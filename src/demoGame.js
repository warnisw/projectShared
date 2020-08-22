import React, {useState, useEffect} from 'react';
import bird from './images/bird.jpg';
import {default as Blur} from 'react-blur';

export default class demoGame extends React.Component {
    constructor() {
      super();  
      this.state = {
        l1: '',
        l2: '',
        l3: ''
      };
      this.handleChange = this.handleChange.bind(this);      
    }  
    handleChange (evt) {
      let nam = evt.target.name;
      let val = evt.target.value;
      let err = '';      
      if (nam === "l1" | nam === "l2" | nam === "l3") {
        if ( !val.match(/[a-z]/i)) {
          err = <strong>Must be a letter</strong>;
        }
      }
      this.setState({errormessage: err});
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [evt.target.name]: evt.target.value });
   
    }
  
      //if (l2.length === 1 && l1.match(/[a-z]/i) {
    
  

  displayimage(){
    return <img src={bird} alt="Bird" />;
  }
    render() {
      
      this.password = true;
        
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
          <input type="text" name="l1" onChange={this.handleChange}  maxLength="1" />
          {this.state.errormessage}          
          <label>_</label>
          <input type="text" name="l2" onChange={this.handleChange} />
          <label>_</label>
          <input type="text" name="l3" onChange={this.handleChange} />
          
          
        </form>
          </div> 
        </div>
    

      );
    }
  }