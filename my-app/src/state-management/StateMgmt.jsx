import React, { useEffect } from 'react'
import { useState } from 'react'

export const StateMgmt = () => {
    const[city,setCity]=useState("Hyderabad");
    // setCity("Vijayawada"); wrong approach

    // if(city==="Goa"){
    //     setCity("Bangalore");
    // }
    // else{
    //     setCity("Delhi");
    // }
    // error: React limits the number of renders to prevent an infinite loop
    useEffect(()=>{
       if(city==="Hyderabad"){
        setCity("Bangalore"); //rerenders again 
    }
    else{
        setCity("Delhi"); // rerenders again , but dom will not update since value is already delhi
        // setState is asynchronous ,only updates when it detects the change
    }
    },[city])

  return (
    <div>I live in {city}</div>
  )
}
