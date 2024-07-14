import React from 'react'
import { useState,useEffect } from 'react';

const apiLink="https://jsonplaceholder.typicode.com/albums";
const UserPage = () => {
    const[userDetails,setUserDetails]=useState([]);

    const apiData=async()=>{
        const data=await fetch(apiLink);
        const response=await data.json();
        setUserDetails(response);
    }

    useEffect(() => {
        apiData();
    }, [])
    
  return (
    <div>
        {userDetails.map((user)=>{
            return(
                <div>
                    {user.title}
                    <hr/>
                </div>
            )
        })}
      
    </div>
  )
}

export default UserPage
