
import DropDown from "./dropdown"
import "../styles/util.css"

const Sidebar =({children,cname})=>{
     
    return(
        <div  className={cname}>
           {children}
       </div>
    )



}

export default Sidebar