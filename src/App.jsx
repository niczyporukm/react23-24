import "./App.css";
import Images from "./components/Images/Images";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import CounterButton from "./components/CounterButton/CounterButton";

function App() {
  return (
    <>
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
