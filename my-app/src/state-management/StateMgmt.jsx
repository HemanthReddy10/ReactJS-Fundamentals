import React from 'react'
import { useState } from 'react'

export const StateMgmt = () => {
    const[city,setCity]=useState("Hyderabad");
    // setCity("Vijayawada"); wrong approach
  return (
    <div>{city}</div>
  )
}
