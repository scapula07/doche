import {FcGoogle} from "react-icons/fc"
import {MdFacebook} from "react-icons/md"
import { useState } from "react"
import {signUp,signInWithGoogle,signInWithFacebook,handerCustomerProfile,db} from "../firebase/firebase.utils"
import { doc,getDoc,setDoc }  from "firebase/firestore";
const SignUp=()=>{
    const [displayName,setDisplayName]=useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

     const AuthSubmit=async(event)=>{

        event.preventDefault()
         console.log("gvcshdfkjhfhjrjfj")
        
       const userCredential  = await signUp(email,password)
       const user=userCredential.user
     //  await handerCustomerProfile(user,)
      
      const uid=user.uid
      console.log(uid)

      const userRef =doc(db,"users",uid)
      const payload={
          displayName:displayName,
          email:email
      }
       const userAdded= await setDoc(userRef,payload)
         console.log(userAdded)
    }



    return(
        <div className="bg-white w-2/5 mt-10 ml-20">
            <div>
                <h3>Create an account</h3>
                <span className="block">Sign up with social</span>
                <FcGoogle className="inline" onClick={signInWithGoogle}/> <MdFacebook className="inline" onClick={signInWithFacebook}/>
                <span className="block"><hr className="inline"/>Or<hr className="inline"/></span> 
            </div>
            <div>
              <form>
                  <label>Username</label>
                     <input 
                     type="text"
                     className="block" 
                     name="Username"
                     value={displayName}
                     onChange={(e)=>setDisplayName(e.target.value)}/>
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
                    <button className="border-1 rounded-sm" onClick={AuthSubmit}> Create account</button>
             </form>

            </div>
          

        </div>
    )



}

export default SignUp