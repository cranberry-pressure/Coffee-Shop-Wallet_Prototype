import React, {Component} from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Mask from '../components/mask';

//Wallet Infoformation
class Wallet extends Component{
  constructor(props) {
    super(props);
    this.state = {
      txdn: "",
      views: "",
      current: [],
      currentAccount: [],
      provider : false
    }

  }

//Connect wallet
  async startApp() {
    const provider = await detectEthereumProvider();

      if(provider){
        
        console.log("we live");
      }
      else{
        console.log("Metamask not installed, Please Install");
      }

    const chainId = await window.ethereum.request({method: 'eth_chainId'});
    console.log("The chain id is " + chainId);

  
  }

//request wallet permission
async requestA(){
      await window.ethereum.request({method:'eth_requestAccounts'}).catch((err) => {
          console.error(err);
      });
}

//retrieve address of account
async accountsA() {
  var accounts = await window.ethereum.request({method:'eth_accounts'}).catch((err) => {
          console.error(err);
  });
    console.log(accounts[0]);
    if(accounts.length === 0){
      console.log('Please connect wallet');

    }else if (accounts[0] !== this.currentAccount){
      this.currentAccount = accounts[0];
      console.log(this.currentAccount[0]);
    }
  }

  
  render(){
    return(
        <div>
          <div className="App-header">
          <div className="contain">
          <h1>Wallet Info</h1>
          <button onClick = {this.startApp} >Connect</button>
          <button onClick = {this.requestA}>Request Wallet</button>
          <button onClick = {this.accountsA}> Account Addr</button>

          //List of transactions
          </div>
            <div className="txnsList">
            
              <div className="txnsGrid">
                <div className="txnsItemA"><h2>Info</h2></div>
                <div className="txnsItemB">                    
                <button> View </button></div>
              </div>

              <div className="txnsGrid">
                <div className="txnsItemA"><h2>Info</h2></div>
                <div className="txnsItemB">  </div>
                <div className="txnsItemB"> <button>View</button></div>
              </div>


            </div>

          </div>
        </div>

    );
  }
}

export default Wallet;
