import React from 'react'
import { useState } from 'react'

const FormExample = () => {
    const[userName,setUserName]=useState("");
    const[newUserDetails,setNewUserDetails]=useState("")
    const getUserName=(e)=>{

         setUserName(e.target.value)
    }

    const userDetails=(e)=>{
        e.preventDefault();
      setNewUserDetails(userName)
    }
  return (
    <section className="form-section">
       
        <div className='form-input'>
        <h2>Hello {newUserDetails}</h2>
            <form onSubmit={userDetails}>
            
            <input type="text" placeholder='Enter your name' onChange={getUserName} />
            <br/>
            <button className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>

    </section>
  )
}

export default FormExample