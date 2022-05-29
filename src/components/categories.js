import { useEffect } from "react"
import { collection,onSnapshot} from "firebase/firestore";
import {db} from "../firebase/firebase.utils"
import { categoriesDataState } from "../recoilState/categoriesState";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
const Categories =()=>{
     const [categoriesData,setcategoriesData]=useRecoilState(categoriesDataState)
  useEffect(()=>{
        const fetchData=async()=>{
           
            const   unsubscribe =await onSnapshot(collection(db, "categories"),(snapshot)=>{
                setcategoriesData( snapshot.docs.map((doc)=>{
                       return {...doc.data(),id:doc.id }
                 } ))
               
                    
                 });
            
        }
         fetchData()
         },[])
         
         console.log(categoriesData)
    return(
        <div className="ml-8">
            {categoriesData.map((categories)=>{
                const  {name}=categories
                return(
                <ol>
                   <Link
                     to={`/categories/${name}`}
                     
                     className="no-underline decoration-black"
                   >
                    <li >{name}</li>
                    </Link>
                </ol>
                )
            }
               
                
              )}
  


        </div>
    )
}

export default Categories