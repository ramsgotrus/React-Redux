import React,{Component} from 'react';
import{connect} from 'react-redux';

class PromoCode extends Component{
  constructor() {
    super();
    
    // Initial state
    this.state = { promCode:''};
  } 
    handleEdit=(e)=>{
          e.preventDefault();
          if(this.state.promCode==='DISCOUNT'){
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
            
    }
    handleChange=(e)=> {
      this.setState({promCode: e.target.value});
    }
    render(){
        return(
         <div  key={this.props.order.id} >
            <form onSubmit={this.handleEdit} >
              <input required type="text" placeholder="Enter Promo Code" value={this.PromoCode} onChange={this.handleChange} />
              <button>Apply</button>
            </form>
         </div>
        );
    }
}
export default connect()(PromoCode);

  