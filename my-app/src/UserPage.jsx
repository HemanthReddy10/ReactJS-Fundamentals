import React from 'react'
import { useState,useEffect } from 'react';

const apiLink="https://jsonplaceholder.typicode.com/albums";
const UserPage = () => {
    const[userDetails,setUserDetails]=useState([]);
    // eslint-disable-next-line
    const[game,setGame]=useState(true);

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
        <hr />
        <hr />
        {game && <h1>display div due to true thing</h1>} 
        <hr />
        <hr />
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
