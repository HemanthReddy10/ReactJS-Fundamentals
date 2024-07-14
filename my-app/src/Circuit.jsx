import React from 'react'

const one=["apple","mango"]
const two=["grapes","orange"]
const three=["pinapple","banana"]
const four={a:1,b:2}
const five={c:3,d:4}

const fruits=[...one,...two,...three];
const nums={...four,...five}
const Circuit = () => {
  return (
      <>
       <div>{fruits[0]}</div>
       <div>{nums.a}</div>
      </>
   
    
  )
}

export default Circuit