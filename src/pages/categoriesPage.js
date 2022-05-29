import {Link, useParams } from 'react-router-dom'
import Layout from "../components/layout/layout"
import { productDataState } from '../recoilState/productdata'
import { useRecoilValue } from 'recoil'
import Card from '../components/card'


const CategoriesPage=()=>{
     const {name}=useParams()
     //console.log(name)

     const products =useRecoilValue(productDataState)
     
  return(
     <div>
         <Layout>
          {products.map((product)=>(product.category===name)?
                 (<Card cname="h-96 m-14">

                    <Link 
                     to={`/product/${product.id}`}

                     state={{
                         product
                     }}
                  >
                 <img src={product.imgUrl} alt="" className="h-64 w-1/2"/>
                 </Link>
                 <span className="block">{product.name}</span>
                 <span className="block">{product.price}</span>
               
    
                </Card>
               ) : ""
                
              
            )}

             

            

         </Layout>

         
     </div>

  )

}

export default CategoriesPage