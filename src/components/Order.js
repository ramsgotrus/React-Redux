import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'
import '../App.css';

class Order extends Component {
  render() {
  return (
    <div>
      <p className="savings-div">Subtotal<b className="b-pr1">${this.props.order.subtotal}</b></p>
      <div className="savings-div">
         <p data-tip= "Picking up your order in the store helps cut costs, and we pass the savings on to you.">Pickup savings 
         </p>
         <p className='savings-font'>
             <b className="b-pr">${this.props.order.savings}</b>
         </p>
      </div> 
      <p className="savings-div">Est. taxes & fees<b className="b-pr2">${this.props.order.taxes}</b></p>
     <div >
     <p className="savings-div">(Based on 94085)</p>
     </div>
       <hr></hr>
       <h2 className="savings-div">Est.total:<b className="b-pr"></b>${this.props.order.total}</h2>
        
      <ReactTooltip />
    </div>
  );
 }
}
export default connect() (Order);