
import {productDataState} from "../recoilState/productdata"
import { useRecoilState } from "recoil"
import{useState,useEffect} from "react"
import { collection,onSnapshot} from "firebase/firestore";
import {db} from "../firebase/firebase.utils"
import Card from "./card"
import "../styles/products.css"
import { Link } from "react-router-dom";


const ProductList =({cname})=>{
   const [productData,setproductData ]=useRecoilState(productDataState)
   
     
      useEffect( ()=>{
              const fetchData=async()=>{
                 
                  const   unsubscribe =await onSnapshot(collection(db, "products"),(snapshot)=>{
                    setproductData( snapshot.docs.map((doc)=>{
                           return {...doc.data(),id:doc.id }
                     } ))
                   //   const mappedData =  snapshot.docs.map((doc)=>{
                      //      return doc.data()
                        //  } )
                         // console.log("MAPPED ", mappedData)
                        
                     });
                
                 //  unsubscribe()
             }
     
         
            fetchData()
            
           
    
          },[] )

          console.log(productData)
          
    return(
        <div className={cname}>
            {productData.map((product)=>
                 
               <Card cname="card-products border-2">
                  <Link 
                     to={`/product/${product.id}`}

                     state={{
                         product
                     }}
                  >
                   <img src={product.imgUrl} alt="" className="h-40"/>
                 </Link>
                   <span>{product.name}</span>
                   <span>{product.price}</span>
                   <button className="block border-1">Add to cart</button>
               </Card>
            
            )}

           


        </div>


    )

}

export default ProductList