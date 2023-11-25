import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import Button from "./components/Button/Button";
import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";

function App() {
  const [isUserFromVisible, setIsUserFromVisible] = useState(false);
  return (
    <>
      <div className="card">
        <Paragraph paragraphText="Witaj w 2-gim semestrze" />
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
