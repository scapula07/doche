import { useEffect, useState} from "react"
import { doc, getDoc } from "firebase/firestore";
import Card from "./card"
import { productDataState } from "../recoilState/productdata";
import Layout from "./layout/layout";
import {MdAddShoppingCart} from "react-icons/md"
import Modal from "../components/modal"
import Cart from "./cart";

const Product=(props)=>{

    const {productdata} =props
    const {product}=productdata
    const{name,imgUrl,description,price}=product
     
    console.log(product)
    const [trigger,setTrigger]=useState(false)
    
  
  return(
     <div>
        <Layout>
          <div className="grid grid-cols-3">
             <div className="col-span-2 grid grid-rows-3">
                 <div className="grid grid-cols-3">
                    <Card>
                       <img src={imgUrl} alt="" className="w-1/2"/>
                    </Card>

                    <Card cname="col-span-2">
                        <span className="block text-xl">{name}</span>
                        <span className="block text-base">#{price}</span>
                         
                        { (!trigger)?
                      <button className="block" onClick={()=>{setTrigger(true)}}>
                             <MdAddShoppingCart className="inline mr-6 "/>
                                     ADD TO CART
                                  </button>
                                : 
                  
                            <Modal trigger={trigger} cname=" ">
                                <Cart product={product}/>
                            </Modal>
                               }
                         
                       </Card>
                    
                 </div>
                      <Card cname="ml-auto mr-auto">
                         <span className="block text-lg">Product Descriptions</span>
                         <p>{description}</p>
                      </Card>
             </div>
             <div>
                Delivery
             </div>
          </div>
   
           
           
            
            

      
          
       </Layout>
        
  
     </div>

  )
}

export default Product