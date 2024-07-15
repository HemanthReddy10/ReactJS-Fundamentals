import React, { useReducer,useEffect } from 'react'
import { Profiler } from 'react'

//USEREDUCER
//types
// Action variables
const FETCH_INIT="FETCH_INIT"
const FETCH_START="FETCH_START"
const FETCH_ERROR="FETCH_ERROR"

//INITAL STATES
const initialState={
    loading:true,
    data:null,
    error:null
}

//function for usereducer /// Reducer Function
const dataReducer=(state,action)=>{

    switch (action.type) {
        case FETCH_INIT:
            return{...state,loading:true,error:null}
        case FETCH_START:
            return {...state,loading:false,data:action.payload}
        case FETCH_ERROR:
            return {...state,loading:false,error:action.payload} 
        default:
            return state;
    }

}

const MultiState = () => {
    const[state,dispatch]=useReducer(dataReducer,initialState);

    const dataHandler=async ()=>{
      try {
        dispatch({type:FETCH_INIT})
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const newData=await response.json();
        const data = {type:FETCH_START,payload:newData};
        dispatch(data);

      } catch (error) {
          dispatch({type:FETCH_ERROR,payload:error.message})
      }

    }

    useEffect(()=>{
        dataHandler()
     
    },[])
  return (
    <div>
        {state.loading && <p>Loading</p>}
        {state.data && <div>
            {state.data.map((item)=>{
                return(
                    <div>
                        <h2>{item.name}</h2>
                    </div>
                )
            })}
            </div>}
        {state.error&& alert(state.error)}
    </div>
    
  )
}

export default MultiState



//centralState.jsx
// const[state,dispatch]=useReducer(dataReducer,initialState)

// reducer folder 
// -> index.jsx {{},{},{}}  Central State
// -> ProfileReducer.jsx {}
// -> productsReducer.jsx{}
// -> OrderReducer.jsx {}