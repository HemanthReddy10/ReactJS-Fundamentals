import React, { useState } from "react";
import "./App.css";
import FirstComp from "./props-container/FirstComp";
import ThirdComp from "./props-container/ThirdComp";
import FourthComp from "./props-container/FourthComp";
import { StateMgmt } from "./state-management/StateMgmt";
import { ClickEvent } from "./ClickEvent";
import ScreenSize from "./state-management/ScreenSize";
import FormExample from "./FormExample";

const car = {
  model: "tesla",
  year: 2024,
  dealer: "musk",
  color: "silver",
};
function App() {
  // eslint-disable-next-line
  const [sampleCondition, setSampleCondition] = useState(true);
  return (
    <div className="container">
      <FirstComp car={car} />
      <StateMgmt />
      <br />
      {sampleCondition ? <FourthComp name="hemanth" /> : <ThirdComp />}
      <br />
      <ClickEvent />
      <br />
      <ScreenSize />
      <hr />
      <FormExample />
      <hr />
    </div>
  );
}

export default App;
