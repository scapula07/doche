import Card from "./card"
import {MdOutlineDelete} from "react-icons/md"
const Cart =({children,addToCart,removeFromCart,clearCart,product})=>{


    return(
        <>
           <Card cname="text-lg">
              <button onClick={()=>clearCart()}><MdOutlineDelete className="inline"/> Clear</button>
              <button onClick={()=>removeFromCart(product.id)}>-</button>
              <span>{children}</span>
              <button onClick={()=>addToCart(product)}>+</button>
         </Card>
        
        </>

        
    )
}

export default Cart