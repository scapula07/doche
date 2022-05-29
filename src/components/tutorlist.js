

export const tutors =[{
    name:"John",
    date_added:"",
    id:"3456",
    img:""

 },
 {
   name:"Tom",
   date_added:"",
   id:"4647",
   img:""

},
{
   name:"Sara",
   date_added:"",
   id:"4779",
   img:""

},
{
   name:"Moses",
   date_added:"",
   id:"3743",
   img:""

}

]

 

const TutorList =()=>{

     
    return(
       

        <div>
        <table class="table-auto w-full">
         <thead>
             <tr className="shadow">
                 <th className="text-slate-400">Name</th>
                 <th className="text-slate-400">Tutor ID</th>
                 <th className="text-slate-400 ">Date Added</th>
             </tr>
             </thead>
           {tutors.map(tutor=>
              <tbody>
              <tr className="shadow ">
                <td className="px-20">{tutor.name}</td>
                <td >{tutor.id}</td>
                <td >{tutor.date_added}</td>

              </tr>
             
            </tbody> )}
          
           
           </table>
           
           

           

        </div>
    )



}

export default TutorList