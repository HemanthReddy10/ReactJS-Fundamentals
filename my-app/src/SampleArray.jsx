import React from "react";
import {userData} from './data';
// let fruits = ["Apple", "mango"];
// let players = [{
//   cricket: "rohit",
//   tennis: "sania",
//   chess: "anand",
//   hockey: "dhyan chand",
// }]

const SampleArray = () => {
  return (
    <div>
    {userData.map((user)=>{
        return(
            <div>
             <h1>{user.username}</h1>
             <h2>{user.email}</h2>
             <h3>{user.address.street}</h3>
             <hr />
            </div>
        )
    })}
      
    </div>
  )
}

export default SampleArray

