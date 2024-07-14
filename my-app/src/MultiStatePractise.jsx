import React, {useReducer } from 'react'
import { useEffect } from 'react';


//types
const FETCH_INIT="FETCH_INIT";
const FETCH_START="FETCH_START"
const FETCH_ERROR="FETCH_ERROR"

//inital state
const initialState={
    loading:true,
    data:null,
    error:null
}

//write data reducer function
const dataReducer=(state,action)=>{

    switch (action.type) {
        case FETCH_INIT:
            return {...state,loading:true,error:null}
        case FETCH_START:
            return {...state,loading:false,data:action.payload}
        case FETCH_ERROR:
            return {...state,loading:false,error:action.payload}
    
        default:
            return state;
    }

}

const MultiStatePractise = () => {

const[state,dispatch]=useReducer(dataReducer,initialState)

    const dataHandler=async ()=>{

        try {
            dispatch({type:FETCH_INIT})
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const newData=await response.json(); 
            dispatch({type:FETCH_START,payload:newData})

        } catch (error) {
            dispatch({type:FETCH_ERROR,payload:error.message})
            
        }
    }
    useEffect(()=>{
        dataHandler()
     
    },[])
  return (
    <div>
    
       {state.loading && <div>Loading..</div>}
       {state.data && <div>
           <h2>{state.data.map((item)=>{
               return(<h2>
                   {item.name}
               </h2>
               )
           }
           )}</h2>
           </div>}
           {state.error&& alert(state.error)}

    </div>
  )
}

export default MultiStatePractise