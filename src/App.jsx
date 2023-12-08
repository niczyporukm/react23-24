import "./App.css";
import Images from "./components/Images/Images";
import Header from "./components/Header/Header";
import viteLogo from "../src/assets/vite.svg";
import Paragraph from "./components/Paragraph/Paragraph";
import CounterButton from "./components/CounterButton/CounterButton";
import Reapeter from "./components/Reapeter/Reapeter";
import { useState } from "react";

function App() {
  const [timerValue, setTimerValue] = useState(0);

  setInterval(() => {
    console.log("I am called");
    console.log("current value of timer", timerValue);
    setTimerValue(timerValue + 1);
  }, 3000);

  console.log("CONSOLE LOG PRZED RENDEREM");
  return (
    <>
      <Header headerText={timerValue} />
      <Images />
      <Header headerText="Vite + React" />
      <div className="card">
        <CounterButton />
        <Paragraph paragraphText="Edit src/App.jsx and save to test HMR" />
      </div>
      <Paragraph
        paragraphText="Click on the Vite and React logos to learn more"
        className="read-the-docs"
      />
      <Reapeter>
        <img src={viteLogo}></img>
      </Reapeter>
    </>
  );
}

export default App;

{
  /* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  */
}
