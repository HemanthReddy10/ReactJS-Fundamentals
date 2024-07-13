import React from 'react'
import { useState } from 'react'
export const ClickEvent = () => {
const [number,setNumber]=useState(0);

const increment=()=>{
    setNumber(number+1)
}
const decrement=()=>{
    if(number>0){
    setNumber(number-1)
    }
}
const reset=()=>{
    setNumber(0)
}

  return (
    <>
    <h1>{number}</h1>
    <button onClick={increment}>Increment</button>
    <br/>
    <button onClick={decrement}>Decrement</button>
    <br/>
    <button onClick={reset}>Reset</button>
    </>
  )
}
