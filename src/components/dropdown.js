import {useState} from "react"
import {RiArrowDropDownLine} from "react-icons/ri"
import {RiArrowUpSLine} from "react-icons/ri"
import Modal from "./modal";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import React from "react"



const DropDown =(props)=>{
    const {title,items,icon,icons,logOut} =props
    const [dropdown,setDropdown] =useState(false)
     
  const handleClick= (event) =>{
    setDropdown(true)
  
}  
const resetTrigger=(event) =>{
setDropdown(false)
}

    return(
        <div>
          <h6> 
              {icon}
            {title}  
          {dropdown ?
           <IconContext.Provider value={{className:"inline"}}>
              < RiArrowUpSLine 
              onClick ={resetTrigger} 
             />
               </IconContext.Provider>
             : 
             <IconContext.Provider value={{className:"inline"}}>
               <RiArrowDropDownLine 
                  onClick={handleClick}
                />
             </IconContext.Provider>
            
             }
           </h6> 
          
            
            <Modal trigger={dropdown}>
                  <button onClick={logOut}><Link to={`/${items[0].link}`}>{items[0].tag}</Link></button>
               {
               
                items.slice(1).map(item=>{
                     const {tag,link,icon} =item
                  return(
                    <ol>
                  
                      
                      <Link to={`/${link}`} className=" no-underline">
                        {icon} <li className="my-4 inline">{tag}</li>
                     </Link>
                    
                      
                     
                   </ol> 
                  )
                }
                  
                   
                    )
                }
           </Modal>
                
           
           <div>



           </div>
        </div>


    )



}


export default DropDown