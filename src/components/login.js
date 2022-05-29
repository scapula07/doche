import {FcGoogle} from "react-icons/fc"
import {MdFacebook} from "react-icons/md"
import { useState } from "react"
import {logIn} from "../firebase/firebase.utils"
import { Link } from "react-router-dom";



const Login =()=>{
   
    
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
  


    const AuthSubmit=async(event)=>{

        event.preventDefault()
         console.log("gvcshdfkjhfhjrjfj")
        
       const userCredential  = await logIn(email,password)
       const user=userCredential.user

       console.log(user)
    }
    return(
        <div className="bg-white w-2/5 mt-10 ml-20">
           
           <div>
               <h3>Sign in</h3>
                 <span className="block">New user? <Link to="/register"> Create an account</Link></span>
              <form>
                 
                 <label className="block">Email Address</label>
                     <input 
                     type="text"
                     className="block"
                     name="email"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}/>
                  <label className="block border-b">Password</label>
                    <input 
                    type="password " 
                    className="block border-b" 
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="border-1 rounded-sm" onClick={AuthSubmit}> Continue</button>
             </form>
                <div>
                    <button className="rounded-md border-2" className="block"><FcGoogle className="inline"/>continue with google</button>
                    <button className="rounded-md border-2" className="block"><MdFacebook className="inline"/>continue with facebook</button>


                </div>

            </div>
          
        </div>
    )
}

export default Login