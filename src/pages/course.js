import AdminLayout  from "../components/layout/adminlayout"
import CourseList  from "../components/courses"
const Coursepage=()=>{
    
    return(
       <div>
           <AdminLayout>
                 <CourseList />
                
           </AdminLayout>
      
       </div>

    )

}

export default Coursepage