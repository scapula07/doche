import Header from "../components/header"
import "../styles/home.css"
import Card  from "../components/card"




const Home=()=>{

    return(
       <div>
          <Header />
          <div className="heroimage hero-div">
         </div>

          <div className="m-14 grid grid-cols-3 gap-6">
              <Card cname=" h-80 rounded-full card-one"></Card>
              <Card cname="h-80 rounded-full card-two"></Card>
              <Card cname="h-80 rounded-full card-three"></Card>
               
        </div>

        <div className="m-16 mt-44 grid grid-rows-2">
              <div className="flex flex-row "> 
                  <Card cname="h-80 flex-auto w-3/5 card-four"><span>SHOP</span></Card>
                  <div className="inline w-2/5 "> THE BEST</div>
              </div>
              <div className="flex flex-row "> 
                  <div className="inline w-3/5 "></div>
                  <Card cname=" flex-auto w-2/5">
                      <img  src="../img/Sutton_Collection_Mobile_e6a90d4d-703f-4873-9293-08f8ae8676c6_400x.jpg" alt="" className="h-80"/>
                  </Card>
               
              </div>




        </div>
          


   



       </div>

    )

}
export default Home