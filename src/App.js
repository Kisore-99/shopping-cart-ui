import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';


import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Login from './components/login/Logn';
import MobileView from './components/home/mobile/Mobile-view';
import Cart from './components/cart/Cart';


function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/product"><Product/></Route>
            <Route path="/login"><Login/></Route>
            <Route path="/mobile-phones"><MobileView/></Route>
            <Route path="/cart"><Cart/></Route>
          </Switch>
        </div>
    </Router>
  );
}


export default App;
