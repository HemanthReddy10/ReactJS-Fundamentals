import React from 'react'
import { useState,useEffect } from 'react'

const ScreenSize = () => {
    const[size,setSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })
    const updateSize=()=>{
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
         } )
    }

    useEffect(() => {
        window.addEventListener('resize',updateSize)
    
      return () => {
        window.removeEventListener('resize',updateSize)
      }
    }, [])
    

  return (
   <>
   width:{size.width}
   <br/>
   height:{size.height}
   </>
  )
}

export default ScreenSize