import Product from "../components/product"
import {useParams,useLocation } from 'react-router-dom'
import Cart from "../components/cart"
import { useState } from "react"
import Card from "../components/card"
import Categories from "../components/categories"
const ProductPage=()=>{
    const {id} =useParams()

    const location =useLocation()
    const [locationState,setlocationState] = useState(location.state)

    
    
  
   return(
       <div>
             
               <Product productdata={locationState} />
               

        
                
             
       </div>
   )

}

export default ProductPage