
import Cart from "../components/cart"
import { cartState } from "../recoilState/cartRecoil/cartState"
import { useRecoilValue,useRecoilState } from "recoil"
import Layout from "../components/layout/layout"
import CartItem from "../components/cartitem"
import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from "../recoilState/cartRecoil/types"
import Card from "../components/card"
import cartReducer from "../recoilState/cartRecoil/Reducer"
import { useReducer,useEffect } from "react"

const Cartpage=() =>{
 
    // const cartArray=useRecoilValue(cartState)
    
      
     const [state,dispatch]  = useReducer(cartReducer,{cart:[]})
     const [cartArray,setCartArray] =useRecoilState(cartState)
     //console.log(state)
     console.log(cartArray.length)
     useEffect(()=>{
         setCartArray(state.cart)
     },[])
     
     
  
     //console.log(state.cart)
  
     const totalCartItem=()=>{
         return cartArray.length
     }
  
  
     const addToCart=(product)=>{
         dispatch({
             type:ADD_TO_CART,
             payload:product
         })
  
     }
  
     const removeFromCart=(productID)=>{
       dispatch({
           type:REMOVE_FROM_CART,
           payload:productID
       })
  
  
     }
  
     const clearCart=()=>{
       dispatch({
           type:CLEAR_CART
        
       })
    }
  
     
    return(
 
        <div>
            <Layout>
              {(cartArray.length ===0)?
                 <Card cname="ml-auto mr-auto shadow border-2 mt-10 w-3/5 text-center">
                     <span className="block "> Your Cart is Empty</span>
                     <button className="mt-5 mb-5 border-2 rounded p-1">Start Shopping</button>
                 </Card>
                    :
                    <div>
                        <CartItem addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}/>
                    </div>
              }
            
          </Layout>
 
     </div>
    )
 
 
}
 
export default Cartpage
