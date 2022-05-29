import { createContext} from "react"

export default createContext({
    addToCart:(product)=>{},
    removeFromCart:(productID)=>{},
    clearCart:()=>{}
})