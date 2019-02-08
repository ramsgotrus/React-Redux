import React, { Component } from 'react';
import {connect} from 'react-redux';
class NewOrder extends Component {
  LoadData=()=>{
    const subtotal = 102.96;
    const savings = 3.85;
    const total = subtotal-savings;
    const discount = subtotal;
    const taxes=10.92;
    const previousPrice=subtotal;
    const data ={
        id: new Date(),
        subtotal ,
        savings,
        discount,
        taxes,
        previousPrice,
        total
    }
    this.props.dispatch({
        type:'ADD_ORDER',
        data
    });
  }
  render() {
    
    return (
      <div className="App">
        {this.LoadData()};
      </div>
    );
  }
}

export default connect()(NewOrder);
