import React, {useState, useEffect} from 'react';
export var password = '';

export default class setPassword extends React.Component {
 
    constructor(props) {
            super(props);
  
      this.state = {
               password: '',
      }
      this.setPassword = this.setPassword.bind(this);    
     
    }
  
    setPassword = (evt) => {   
      let msg = '';  
      let val = evt.target.value; 
      if ( !val.match(/[a-z]/i)){ 
        msg = <strong>Password must contain letters only</strong>;
        }
      
      this.setState({ password: evt.target.value });  
      this.setState({msg: msg}); 
      password = evt.target.value  
    }

    render() { 
      return(
        <div>
          <h1> Change password</h1>
        <form>       
          <input type='password'
             placeholder='password' 
              icon='plus' 
              iconPosition='left'
              maxLength="3" 
              onChange={this.setPassword}              
              />
              <input type='submit'/>
        </form>
        {this.state.msg}  
        </div>
      );
    }
  }