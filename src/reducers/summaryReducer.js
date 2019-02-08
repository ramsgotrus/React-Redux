const summaryReducer = (state = [], action)=>{
    switch (action.type) {
        case 'ADD_ORDER':
              return state.concat([action.data]);
        case 'EDIT_ORDER':
              return state.map((order)=>order.id === action.id?{...order,editing:!order.editing}:order) 
        case 'UPDATE':
         return state.map((order)=>{
             if(order.id==action.id){
                 return {
                     ...order,
                     subtotal:action.data.newSubtotal,
                     savings:action.data.newSavings,
                     taxes:action.data.newTaxes,
                     total:action.data.newTotal,
                     discount:action.data.newDiscount,
                     previousPrice:action.data.previousPrice,
                     editing: !order.editing
                 }
    
             }
             else return order;
         })
        default:
            return state;
    }
    }
    export default summaryReducer;