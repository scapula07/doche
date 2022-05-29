import axios from "axios"
import {useState,useEffect} from 'react'

  //export const baseUrl="http://medicos1.olaeghen.com/edu"
const CourseList=()=>{
       const [courses,setCourses] =useState(null)
     
     
       useEffect(()=>{

       const fetchData = async ()=>{
       const   res  =  await axios.get("http://medicos1.olaeghen.com/edu/courses")
        setCourses(res)
       } 

       try{
        fetchData()
    }
       catch(error) {
          console.log(error)
       }
       },[])  
  

      console.log(courses)
    return(
        <div>
          

            
        </div>
    )



}

export default CourseList