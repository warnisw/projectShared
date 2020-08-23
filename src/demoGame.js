import React, {useState, useEffect} from 'react';
import bird from './images/bird.jpg';
import bird2 from './images/bird2.jpg';
import './demoGame.css';
import {default as Blur} from 'react-blur';

export default class demoGame extends React.Component {
    constructor() {
      super();  
      this.state = {
        l1: '',
        l2: '',
        l3: '',
        password: false,
        img: bird,     
      };
      this.handleChange = this.handleChange.bind(this);      
    }  
    toggleImage = (id) => {
      this.setState(state => ({ img: id }));
      this.setState(state => ({ width: 350 }))
    }
  
    getImageName = () => this.state.img ? 'bird' : 'bird2'
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
      if (this.state.l1 === "a" && this.state.l2 === "a" &&this.state.l3 === "a") {    
        this.setState({ password: true });
      }
    }  
 
    render() {  
       console.log(this.state.img) 
      return(
        <div className="outer">
          <h1 style={this.props.style}>Demo Game</h1>
          <p>
            Enter 3 letters to unlock image
          </p> 
          <div className="progress" style={{width: this.state.width}} onClick={(e) => this.toggleImage(bird, e)} >
          {this.state.img == bird ? "selected" : null}  
            <Blur className='' img={bird} blurRadius={20} > </Blur> 
          </div>
          <div className="progress" style={{width: 300}} onClick={(e) => this.toggleImage(bird2, e)} >
          {this.state.img == bird2 ? "selected" : null}  
            <Blur className='' img={bird2} blurRadius={20} > </Blur> 
          </div>
          {this.state.password ? <img src={this.state.img} alt="Bird" /> : null}             
          <div class="bg-img">
            <form>      
            <label></label>    
              <input type="text" name="l1" placeholder="_" onChange={this.handleChange}  maxLength="1" />
             {this.state.errormessage}          
            <label></label>
              <input type="text" name="l2" placeholder="_" onChange={this.handleChange} maxLength="1" />
            <label></label>
              <input type="text" name="l3" placeholder="_" onChange={this.handleChange} maxLength="1"/>
            <button type="" class="btn">Refresh</button>          
        </form> 
       
          </div> 
        </div> 
      );
    }
  }