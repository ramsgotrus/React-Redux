import React,{Component} from 'react';
import{connect} from 'react-redux';
import imgChair from '../assests/images/chair.jpeg';
import '../App.css';

class ItemDetails extends Component{
    
    handleEdit=(e)=>{
        e.preventDefault();
        const newSubtotal = this.props.order.subtotal;
        console.log(newSubtotal);
        const newSavings= this.props.order.savings;
        const newDiscount= newSubtotal *10/100;
        
        console.log(newDiscount);
        const newTotal=newSubtotal-newSavings-newDiscount;
        const previousPrice= newSubtotal;
        const newTaxes = this.props.order.taxes;
        const data={
            newSubtotal,
            newSavings,
            newTotal,
            previousPrice,
            newDiscount,
            newTaxes
        }
      this.props.dispatch({type: "UPDATE", id: this.props.order.id, data:data})
    }

    render(){
        return(
         <div key={this.props.order.id} className='itemDetails'>
             <div className='itemDetails'>
                <img className='savings' width="70" height="70" src ={imgChair} />
                <p className='savings' height="30"> Essentials by OFM ESS-3085 Racing Style
                Leather Gamming Chair, Blue</p>
             </div>
            <div>
               <h2>${this.props.order.total}</h2>
               <p className='stringStrike'>${this.props.order.previousPrice}</p>
               <p className='b-pr2'>Qty: 1</p>
            </div>
         </div>
        );
    }
}
export default connect()(ItemDetails);

