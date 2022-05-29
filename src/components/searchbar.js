import Fuse from 'fuse.js'
import {productDataState} from "../recoilState/productdata"
import {useRecoilValue} from "recoil"
import Card from "./card"
const SearchBar=()=>{
         
    const data=useRecoilValue(productDataState)
    
    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['name']
      }
   const fuse = new Fuse(data, options)
   let result

     const handleSearch=(event)=>{
        const searchterm =event.target.value
       result =fuse.search(searchterm)
     }

   return(
     <div>
       <form>
           <input type="search" placeholder="Search " onChange={handleSearch}/>
      </form>
          <Card>
              
          </Card>
      


      </div>

   )


}

export default SearchBar