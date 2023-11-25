import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import CounterButton from "./components/CounterButton/CounterButton";

function App() {
  return (
    <>
      <div className="card">
        <CounterButton />
        <Paragraph paragraphText="Click left button to decrease / right to increase" />
      </div>
    </>
  );
}

export default App;
