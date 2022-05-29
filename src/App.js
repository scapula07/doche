import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/home"
import Admin from "./pages/admin"
import ProductPage from "./pages/productpage"
import Products from "./pages/products"
import CartPage from "./pages/cartpage"
import CheckoutPage from "./pages/checkoutpage"
import Payment from "./components/payment"
import Delivery from "./components/delivery"
import CategoriesPage from "./pages/categoriesPage"
import RegisterPage from "./pages/registerpage"
import LoginPage from "./pages/loginpage"
import { useEffect } from "react"
import { currentUserState } from "./recoilState/currentuserState"
import { useRecoilState } from "recoil"
import { onAuthStateChanged } from "firebase/auth"
import {auth} from "./firebase/firebase.utils"
import CustomerPage from "./pages/customerPage"
import CustomerAccount from "./components/customerAccount"
import CustomerOrders from "./components/customerOrders"
import { doc,getDoc}  from "firebase/firestore";
import {db} from "./firebase/firebase.utils"

import { Navigate } from "react-router-dom"


const App=()=> {
      const [currentUser,setcurrentUser] =useRecoilState(currentUserState)
     
      let authListner=null
      useEffect( ()=>{
      
        authListner=onAuthStateChanged(auth,(user)=>{
            if (user !== null) {
                const uid = user.uid;
                //const {displayName,email,uid}=user
             //   console.log(displayName)

                const userRef =doc(db,"users", uid)
                console.log(userRef)
               getDoc(userRef).then(res=> setcurrentUser(res.data()))
            

            }
            
            
          
        })
      
        
       return(
           authListner()
       )
    },[])

    console.log(currentUser)
  return (
 
       <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
           <Route exact path="/admin" element={<Admin/>} />
           <Route exact path="/products" element={<Products />} />
           <Route exact path="/product/:id" element={<ProductPage/>} />
               
     
     
        <Route exact path="/checkout" element={<CheckoutPage />}>
             <Route exact path="payment" element={<Payment />}  />
             <Route exact path="delivery" element={<Delivery />} />
        </Route>
             
          <Route exact path="/cart" element={<CartPage/>} />
          <Route exact path="/categories/:name" element={<CategoriesPage/>} />
          <Route exact path="/register" element={
            <div>   
           {(currentUser ==={})?  <Navigate to="/products" replace={true} /> :<RegisterPage/>} 
           
            </div>
            } 
           
             />
          <Route exact path="/login" element={(currentUser ==={})? <Navigate to="/products" replace={true} />:<LoginPage/>} />
          <Route exact path="/customer" element={<CustomerPage />}>
             <Route exact path="account" element={<CustomerAccount />}  />
             <Route exact path="orders" element={<CustomerOrders />} />
        </Route>
         
         </Routes>
      </div>
       </Router>
 
  );
}

export default App;
