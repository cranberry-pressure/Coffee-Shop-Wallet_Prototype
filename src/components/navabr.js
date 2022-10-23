import React, {Component} from "react";
import '../App.css';
import {BrowserRouter as Routing, Routes,Route, Link} from "react-router-dom";


class NavBar extends Component{
  render(){
    return(
        <div>
            <nav className="bar">
              <Link to="/">
                <h1 className="barT">Home</h1>
              </Link>
            
              <Link to="/info"> 
                <h1 className="barT"> Info </h1>
              </Link>

              <Link to="/wallet">
                <h1 className="barT"> Wallet </h1>
              </Link>

              <Link to ="/menu">
                <h1 className="barT">Menu</h1>
              </Link>

            </nav>
        </div>
    );
      
  }
}

export default NavBar;
