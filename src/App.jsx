import "./App.css";
import Images from "./components/Images/Images";
import Header from "./components/Header/Header";
import viteLogo from "../src/assets/vite.svg";
import Paragraph from "./components/Paragraph/Paragraph";
import CounterButton from "./components/CounterButton/CounterButton";
import Reapeter from "./components/Reapeter/Reapeter";
import { useState, useEffect } from "react";
import Animator from "./components/Animator/Animator";

function App() {
  return (
    <>
      <Animator />
      <Header headerText="Vite + React" />
      <div className="card">
        <CounterButton />
        <Paragraph paragraphText="Edit src/App.jsx and save to test HMR" />
      </div>
      <Paragraph
        paragraphText="Click on the Vite and React logos to learn more"
        className="read-the-docs"
      />
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
