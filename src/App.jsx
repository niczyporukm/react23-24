import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import CounterButton from "./components/CounterButton/CounterButton";
import Button from "./components/Button/Button";
import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";

function App() {
  const [isUserFromVisible, setIsUserFromVisible] = useState(false);
  return (
    <>
      <div className="card">
        <CounterButton />
        <Paragraph paragraphText="Click left button to decrease / right to increase" />
        <Button
          text="Show / Hide User From"
          onClick={() => setIsUserFromVisible((prevState) => !prevState)}
        />
      </div>
      {isUserFromVisible && <UserForm />}
    </>
  );
}

export default App;
