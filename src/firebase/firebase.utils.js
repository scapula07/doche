import {firebaseConfig}  from "./firebase.config"
import { initializeApp } from 'firebase/app';
import { getFirestore,doc,getDoc,setDoc }  from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth,createUserWithEmailAndPassword,
       signInWithEmailAndPassword,GoogleAuthProvider,
       signInWithPopup,FacebookAuthProvider,
       signOut} from 'firebase/auth';





export const app =initializeApp(firebaseConfig)
export  const db= getFirestore()
// export const db = getFirestore(app);
export const storage = getStorage(app);
export       const auth =getAuth()

const googleprovider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();

export const signInWithFacebook=async()=>{
  
    signInWithPopup(auth, fbprovider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
    
      const errorCode = error.code;
      const errorMessage = error.message;
    
      const email = error.email;
      //
      const credential = FacebookAuthProvider.credentialFromError(error);
       console.log(errorCode)
       console.log(errorMessage)
      // ...
    });
}


export const signInWithGoogle=async ()=>{

     try{
        const result =  await signInWithPopup(auth, googleprovider)
     
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
     }catch(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(errorCode,errorMessage)
     }
      }
    
export const signUp=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
export const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
export const logout=()=>{
  signOut(auth).then(() => {
   
  }).catch((error) => {
    console.log(error)
  })
}



