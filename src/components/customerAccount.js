import Card from "./card"
import { currentUserState } from "../recoilState/currentuserState"
import {useRecoilValue} from "recoil"
import {FiEdit3} from "react-icons/fi"
import { doc,getDoc}  from "firebase/firestore";
import {db} from "../firebase/firebase.utils"




const CustomerAccount =()=>{
    const {displayName,email} =useRecoilValue(currentUserState)

    console.log(displayName,email)
  
    
 

   

return(
    <div>
       <h4 className="border-b-2">Account Overview</h4>
       <div className="grid grid-cols-2  gap-4"> 
          <Card className="border-2">
              <h6 className="border-b-2">ACCOUNT DETAILS <FiEdit3 className="inline ml-9"/></h6>
              <span className="block">{displayName}</span>
              <span className="block ml-4">{email}</span>

          </Card>

          <Card className="border-2">
              <h6 className="border-b-2">ADDRESS BOOK</h6>
          </Card>
      

       </div>
    </div>
)

}

export default CustomerAccount