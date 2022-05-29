import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from "./types"
 
    const addToCart=(state,product)=>{
        const copy=[...state.cart]
 
        const itemIndex=copy.findIndex((i)=>i.product.id ===product.id )
 
      if  (itemIndex < 0 ) {
        copy.push({product,quantity:1})
      }else{
        const copyItem ={...copy[itemIndex]}
        copyItem.quantity++
        copy[itemIndex]=copyItem
      }
         
      return{...state, cart:copy}
    }
    
    
    const removeFromCart=(state,product)=>{
        const copy =[...state.cart]
        const itemIndex=copy.findIndex((i)=>i.product.id ===product.id )
 
        if(itemIndex >0){
            const item={...copy[itemIndex]}
            item.quantity--
 
            if(itemIndex<=0){
                copy.splice(itemIndex,1)
            }
        }else{
            const Item ={...copy[itemIndex]}
            copy[itemIndex]=Item
        }
        return{...state, cart:copy} 
    }
    
    
    const clearCart=(state)=>{
        return {...state,cart:[]}
   }




const cartReducer= (state,action)=>{
    switch (action.type){
        case ADD_TO_CART:
          return addToCart(state,action.payload)
       case REMOVE_FROM_CART:
           return removeFromCart(state,action.payload)
       case CLEAR_CART:
           return clearCart(state)
   
       default:
           return state
    }
}

export default cartReducer