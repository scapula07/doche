import Card from "./card"
import Cart from "./cart"
const CartItem =({addToCart,removeFromCart,clearCart})=>{
  
return(
    <>
      <Card>
      
         <Cart addTocart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}/>
      </Card>
    </>
      
  )


}

export default CartItem