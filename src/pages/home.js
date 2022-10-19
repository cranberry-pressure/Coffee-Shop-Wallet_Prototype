import React, {Component, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {useNavigate} from "react-router-dom";

//Home page
class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            
          <div>
            <h1>Captain Coffee </h1>
            <h3> Rewarding coffee for all!</h3>
          </div> 
      </header>
          
      <div>
        <div className="container">
        
          <div className="gridA">
          <button onClick= {() => this.props.nav('./info')}> Learn More</button>
          </div>
          <div className="gridA">
            <button onClick= {() => this.props.nav('./wallet')} >Wallet</button>
          </div>
          
        </div>
        
      </div>
          
    </div>
    );
  }
}

function WithNav(props){
    let nav = useNavigate();
    return <Home {...props} nav={nav} />
  }

export default WithNav;
