import React from 'react'
import './App.css'
import FirstComp from './props-container/FirstComp'
import { StateMgmt } from './state-management/StateMgmt'


const car={
  model:"tesla",
  year:2024,
  dealer:"musk",
  color:"silver"
}
function App() {
  return (
    <div className='container'>
     <FirstComp car={car}/>
     <StateMgmt/>
    </div>
  )
}

export default App
