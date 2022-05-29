import { Outlet,Link } from "react-router-dom"
import Card from "../components/card"
import Layout from "../components/layout/layout"
import { useState } from "react"


const CheckoutPage=()=>{
   const [email, setEmail] = useState("")
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")

 

 return(
    <div>
       <Layout>
           <div className="grid grid-cols-3">
               <div className="col-span-2">
                   <div className="grid-rows-2">
                      <Card>
                         <h3>Customer's Details</h3>
                        {window.location.href ==="http://localhost:3000/checkout"?
                           <div>
                               <form>
                                 <label className="block">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="border-2 block"
                                />
                              <label className="block">Email</label>
                              <input
                                 type="text"
                                 id="email"
                                 onChange={(e) => setEmail(e.target.value)}
                                 className="border-2 block"

                                />
                              <label className="block">Phone</label>
                            <input
                               type="text"
                               id="phone"
                               onChange={(e) => setPhone(e.target.value)}
                               className="border-2 block"
                              />
                             <label className="block">Address</label>
                              <input
                               type="text"
                               id="address"
                               onChange={(e) => setAddress(e.target.value)}
                               className="border-2 block"
                              />
                            <Link
                              to="delivery"
                                >
                              <input type="submit" placeholder="Proceed To Next Step"  className="block" />  
                         
                              </Link> 
                          </form>
                            
                         


                            <div className="border-2">
                                  <Card className="mb-8 shadow-md "> DELIVERY METHOD </Card>
                                  <Card className="shadow-md"> PAYMENT METHOD </Card>
                            </div>
                            

                            </div>
                          :
                          <div>
                             <span className="block">{name}</span>
                             <span className="block">{address}</span>
                             <span className="block">+234{phone.substr(1) }</span>
                          </div>

                           
                        
                        }
                          
                     </Card>
                             
                     < Card>
                       
                     <Outlet context={[name,email,phone]}/>   
                     </Card>
                  
                
                  
                   </div>



                  


               </div>

               <Card>
                  <h3>Your orders</h3>



               </Card>
             
             
             
              </div>



       </Layout>
       
        
    </div>

 )

}

export default CheckoutPage