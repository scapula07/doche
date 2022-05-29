import Card from "./card"
import { Link} from "react-router-dom" 

const Delivery =() =>{

  return(
      <div>
        <Card>

           <h4>How do you want your order delivered?</h4>
          
          <input  type="radio" name="delivery" value="Door delivery"/>
          <label>Door/Home Delivery</label>
            <Card className="w-3/4 border-2 shadow-md ">
                 <div>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Donec hendrerit urna nec ex finibus euismod. Integer fringilla tempor tempor.
                     Aenean eget auctor ligula. Integer viverra euismod urna, non mattis ante tristique sit amet. 
                      Aenean imperdiet sit amet nisl in interdum. Suspendisse potenti.
                    Praesent dictum accumsan erat, sed interdum lectus bibendum vel.
                     Vivamus quam ipsum, tempus at augue a, convallis luctus leo. 
                   </div>

             </Card>


          <input type="radio" name="delivery" value="Pickup delivery" />
          <label>Pickup Delivery</label>

             <Card className="w-3/4 border-2 shadow-md ">
                 <div>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Donec hendrerit urna nec ex finibus euismod. Integer fringilla tempor tempor.
                     Aenean eget auctor ligula. Integer viverra euismod urna, non mattis ante tristique sit amet. 
                      Aenean imperdiet sit amet nisl in interdum. Suspendisse potenti.
                    Praesent dictum accumsan erat, sed interdum lectus bibendum vel.
                     Vivamus quam ipsum, tempus at augue a, convallis luctus leo. 
                   </div>

               </Card>
               <Link
                 to="../payment"
               >
               <button >Proceed To Next Step</button>
               
               </Link>
            

             



        </Card>
         


        
      </div>
  )


}

export default Delivery