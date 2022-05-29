import Layout from "../components/layout/layout"
import SideBar from "../components/sidebar"
import { Outlet,Link } from "react-router-dom"
import {FaRegUser} from "react-icons/fa"
import {BiBookAlt} from "react-icons/bi"

const CustomerPage =()=>{

return(
    <div>
        <Layout>
            <div className="grid grid-cols-3">
                <SideBar>
                     <ol>
                         <li className="border-1"><FaRegUser className="inline"/>My Account</li>
                         <li className="border-1"><BiBookAlt className="inline" />Orders</li>


                     </ol>

                </SideBar>

                <div className="col-span-2  border-2 shadow-lg">
                     <Outlet />
                </div>


            </div>

        </Layout>

    </div>
)


}

export default CustomerPage