import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './components/Order'
import PurchaseSummary from './components/PurchaseSummary'
import NewOrder from './components/NewOrder'
import Layout from './components/Layout/Layout';
import layout from './components/Layout/Layout';

class App extends Component {
  render() {
    
    return (
      <div className="App">
          <layout>
          <NewOrder></NewOrder>
          <PurchaseSummary></PurchaseSummary>
          </layout>
      </div>
    );
  }
}

export default App;
