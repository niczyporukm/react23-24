import "./App.css";
import Images from "./components/Images/Images";
import Header from "./components/Header/Header";
import viteLogo from "../src/assets/vite.svg";
import Paragraph from "./components/Paragraph/Paragraph";
import CounterButton from "./components/CounterButton/CounterButton";
import Reapeter from "./components/Reapeter/Reapeter";
import { useState, useEffect } from "react";

function App(props) {
  const { shouldCount } = props;
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    if (!shouldCount) return;
    const interval = setInterval(() => {
      setTimerValue((timerValue) => timerValue + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const shouldDisplayContent = timerValue < 10 || timerValue > 20;
  return (
    <>
      <Header headerText={timerValue} />
      {shouldDisplayContent && <Images timerValue={timerValue} />}
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
