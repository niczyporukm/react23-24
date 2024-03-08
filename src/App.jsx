import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import Button from "./components/Button/Button";
import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import { NavLink } from "react-router-dom";

function App() {
  const [isUserFromVisible, setIsUserFromVisible] = useState(false);

  const userName = JSON.parse(localStorage.getItem("user")).username;

  return (
    <>
      <div className="card">
        <Paragraph
          paragraphText={`Cześć, jesteś zalogowany jako: ${userName}`}
        />
        <NavLink to="/login">Wyloguj</NavLink>
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
