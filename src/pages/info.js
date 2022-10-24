import React, {Component} from "react";
import '../App.css';

//Information on coffee
class Info extends Component{
  render(){
    return(
      <div>
        <h2>Info Page</h2>
        <div className="App-header">
          <div className= "container">

            <div className= "gridB">
              <h1> LogoA</h1>
            </div>

            <div className= "gridC">
                  <h1>Info A</h1>
            </div>
            
          </div>

          <div className= "container">

            <div className= "gridB">
              <h1>InfoB</h1>
            </div>

            <div className="gridC">
              <h1>LogoB</h1>
            </div>

          </div>
          
          <div className= "container">

            <div className= "gridB">
              <h1>LogoC</h1>
            </div>

            <div className= "gridC">
              <h1>InfoC</h1>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Info;
