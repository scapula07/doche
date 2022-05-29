import Layout from "../components/layout/layout"
import ProductList from "../components/productlist"
import Sidebar from "../components/sidebar"
import Categories from "../components/categories"

const Products =() =>{
    
    return(
          
          
           <div>
               <Layout>
                   <div className="grid grid-cols-3">
                        <Sidebar>
                            <Categories/>
                        </Sidebar>
                           
                    
                       <ProductList cname="grid grid-cols-2 col-span-2"/>
                       
                   </div>



               </Layout>
           </div>




    )



}

export default Products