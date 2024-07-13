import React from 'react'

const FirstComp = (props) => {

    const {model,year,dealer,color}=props.car;
  return (
    <div>
     <ul> Car object display using prop:
         <li>{model}</li>
         <li>{year}</li>
         <li>{dealer}</li>
         <li>{color}</li>
     </ul>
    </div>
  )
}

export default FirstComp
