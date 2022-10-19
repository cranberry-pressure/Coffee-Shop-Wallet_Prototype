import React from "react";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Info from './pages/info';
import Home from './pages/home';
import Wallet from './pages/wallet';
import Menu from './pages/menu';
import {BrowserRouter as Routing,Routes, Route, Link} from "react-router-dom";

function App(){
  return(
    <div className="App">
        <Routing>
          <Navbar/>
          <Routes>
            <Route path='/info' element={<Info/>}/>
            
            <Route path='/wallet' element={<Wallet/>}/>

            <Route path='/menu' element={<Menu/>}/>

            <Route path='/' element={<Home/>}/>
            
          </Routes>
        
        </Routing>
      
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
