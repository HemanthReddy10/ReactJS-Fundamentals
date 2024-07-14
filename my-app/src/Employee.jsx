import React from 'react'
import { useState } from 'react'

const Employee = () => {
    const[name,setName]=useState("");
    const[place,setPlace]=useState("");

    const empDetails={name,place}
    const empHandler=async (e)=>{
     e.preventDefault();
     console.log(empDetails);
     try{
         // eslint-disable-next-line
        const response=await fetch("http://localhost:5000/api/emp/add-emp",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(empDetails)
   
        })
        alert("data posted successfully");
     }
     catch(error){
         alert("data failed to post");

     }
  
     
    }

  return (
    <>
    <form onSubmit={empHandler}>
        <input type="text" name="name" placeholder='name' onChange={(e)=>setName(e.target.value)}  /><br/>
        <input type="text" name="place" placeholder='place' onChange={(e)=>setPlace(e.target.value)} />
        <button type='submit'>submit</button>
    </form>
      
    </>
  )
}

export default Employee