import SideBar  from "../sidebar"
import Header from "../header"

const AdminLayout =({children})=>{

  
return(
   <div className="m-auto ">
      <div className="grid grid-cols-4">
          <div>
              <SideBar cname="text-center">
                  <span className="block text-lg shadow-lg">Admin Panel</span>
                  <ol>
                    <li></li>
                    

                  </ol>
              </SideBar>
          </div>
          <div className="col-span-3">

          </div>
      </div>
      {children}
   </div>

)


}

export default AdminLayout