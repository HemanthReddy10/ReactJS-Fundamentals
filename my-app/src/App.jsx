import React,{useState} from 'react'
import './App.css'
import FirstComp from './props-container/FirstComp'
import ThirdComp from './props-container/ThirdComp'
import FourthComp from './props-container/FourthComp'
import { StateMgmt } from './state-management/StateMgmt'
import { ClickEvent } from './ClickEvent'


const car={
  model:"tesla",
  year:2024,
  dealer:"musk",
  color:"silver"
}
function App() {

  const[sampleCondition,setSampleCondition]=useState(true);

 

  return (
    <div className='container'>
     <FirstComp car={car}/>
     <StateMgmt/>
     <br/>
     { sampleCondition? <FourthComp name="hemanth"/> : <ThirdComp/>}
     <br/>
     <ClickEvent/>
    </div>
  )
}

export default App
