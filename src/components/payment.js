import { PaystackButton } from 'react-paystack'
import { useState } from 'react'
import Card from "./card"
import { useOutletContext } from "react-router-dom";


const Payment=()=>{

  const [name,email,phone]=useOutletContext()
    console.log(name)
   
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY
    const amount = 1000000 // Remember, set in kobo!
   
    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }




return(
    <div>
        <Card>
       
          <PaystackButton {...componentProps} />




        </Card>
       





    </div>
)

}

export default Payment