import React, { Component } from 'react';
import {connect} from 'react-redux';
import Order from './Order';
import PromoCode from './PromoCode';
import ItemDetails from './ItemsDeails';
import '../App.css';

class PurchaseSummary extends Component{
    constructor() {
        super();
        
        // Initial state
        this.state = { showItems: false, showPromo: false, showitemText:'Show items details +', showpromoText:'Apply promo code +'};
      } 
      
      toggleItems() {
        this.setState({
            showItems: !this.state.showItems
        });
        if(this.state.showItems){
            this.setState({showitemText:'Show items details +'})
        }
        else this.setState({showitemText:'Hide items details -'})
      }
      togglePromo() {
        this.setState({
            showPromo: !this.state.showPromo,
        });
        if(this.state.showPromo){
            this.setState({showpromoText:'Apply promo code +'})
        }
        else this.setState({showpromoText:'Hide promo code -'})
      }
    render(){
        return(
            <div className="savings-div">
                {this.props.orders.map((order) => (
                    <div key={order.id} >
                            <Order key={order.id} order={order} />
                            <a className="savings-div"  href="#" onClick={this.toggleItems.bind(this)}>
                                   {this.state.showitemText}
                            </a>
                            <div  className={"collapse" + (this.state.showItems ? ' in' : '')}>
                               <ItemDetails  order={order} key={order.id}/>
                            </div>
                            <hr></hr>
                            <a href="#" className="savings-div" onClick={this.togglePromo.bind(this)}>
                                   {this.state.showpromoText}
                            </a>
                            <div className={"collapse" + (this.state.showPromo ? ' in' : '')}>
                               <PromoCode order={order} key={order.id} /> 
                            </div>
                            
                    </div>
                ))}

            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        orders:state 
    }
}
export default connect(mapStateToProps) (PurchaseSummary);
