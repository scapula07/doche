import SearchBar from "./searchbar"
import NavBar from "./navbar"
import "../styles/header.css"
import Card from "./card"
import DropDown from "./dropdown"
import {FaRegUser} from "react-icons/fa"
import {BiBookAlt} from "react-icons/bi"
import { currentUserState } from "../recoilState/currentuserState"
import {useRecoilValue} from "recoil"
import {  signOut } from "firebase/auth";
import {auth} from "../firebase/firebase.utils"



const Header = () => {
    const currentUser=useRecoilValue(currentUserState)

    const items =[
       
        {
            tag:"My Account",
            link:"register",
            icon: <FaRegUser className="inline"/>
        },
        {
            tag:"Orders",
            title:"register",
            icon:<BiBookAlt className="inline"/>
        }

    ]

    const logOut =()=>{
        signOut(auth).then(() => {
            console.log("sucess")
          }).catch((error) => {
            console.log(error)
          });
          

    }
    console.log(currentUser)

    return (
        <div>
            {window.location.href ==="http://localhost:3000/"?
              <NavBar />
              :
              <div> 
                  <NavBar />
                  <div>
                      {(currentUser =={})?
                      <DropDown title="Account" 
                      items={[ {
                       tag:"Log Out",

                       
                           },...items]}
                      icons={[<BiBookAlt />,<FaRegUser />]} 
                      icon={<FaRegUser className="inline"/>}
                      logOut={logOut}
                      />
                       :  
                      <DropDown title="Account" 
                       items={[ {
                        tag:"Sign Up",
                        link:"register"
                            },...items]}
                       icons={[<BiBookAlt />,<FaRegUser />]} 
                       icon={<FaRegUser className="inline"/>}/>  
                        }
                   </div>
                 <Card cname="card-header h-60 m-10 ml-10"  >
                


                 </Card>
                  



             



              </div>
            }
           
           
        </div>

    )


}

export default Header