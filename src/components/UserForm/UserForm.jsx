import { useState } from "react";
import "./UserForm.css";
import { isVeganOptions, foodPreferencesList } from "../../consts/data";

// Komponent formularza użytkownika
const UserForm = () => {
  // Inicjalizacja stanów
  const [userName, setUserName] = useState(""); // Stan dla nazwy użytkownika
  const [password, setPassword] = useState(""); // Stan dla hasła
  const [userAge, setUserAge] = useState(); // Stan dla wieku użytkownika
  const [showPassword, setShowPassword] = useState(false); // Stan dla widoczności hasła
  const [isVegan, setIsVegan] = useState(""); // Stan dla wyboru czy użytkownik jest weganinem
  const [foodPreferences, setFoodPreferences] = useState([]); // Stan dla preferencji żywieniowych

  // Funkcja do przełączania widoczności hasła
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Funkcja do ustawiania wieku użytkownika
  const handleSetUserAge = (event) => {
    const { value } = event.target;
    if (value.length === 0 || (value > 0 && value < 99)) {
      setUserAge(value);
    }
  };

  // Funkcja do obsługi preferencji żywieniowych
  const handleFoodPreference = (event, selectedFood) => {
    const checked = event.target.checked;
    const name = event.target.name;
    if (checked) {
      setFoodPreferences([...foodPreferences, selectedFood]);
    } else {
      setFoodPreferences(foodPreferences.filter((el) => el.name !== name));
    }
  };

  // Funkcja do obsługi wyboru czy użytkownik jest weganinem
  const handleIsVegan = (event) => {
    const value = event.target.value;
    setIsVegan(value);
    if (value === "Yes") {
      setFoodPreferences(foodPreferences.filter((el) => el.isVegan));
    }
  };

  // Funkcja do mapowania preferencji żywieniowych
  const mappedFoodPreferences = () => {
    let foods = foodPreferencesList; // Początkowa lista preferencji żywieniowych

    // Jeżeli użytkownik jest weganinem, filtrujemy listę tylko do wegańskich opcji
    if (isVegan === "Yes") {
      foods = foodPreferencesList.filter((el) => el.isVegan);
    }

    // Mapujemy listę do elementów JSX
    return foods.map((simpleFoodFromList) => (
      <label key={simpleFoodFromList.id}>
        {simpleFoodFromList.name}:{" "}
        <input
          // Sprawdzamy czy dana preferencja jest zaznaczona
          checked={foodPreferences.find(
            (food) => food.name === simpleFoodFromList.name
          )}
          type="checkbox"
          name={simpleFoodFromList.name}
          // Obsługa zmiany zaznaczenia
          onChange={(e) => handleFoodPreference(e, simpleFoodFromList)}
        />
      </label>
    ));
  };

  return (
    <>
      <p>Imie: {userName}</p>
      <p>Haslo: {password}</p>
      <p>Wiek: {userAge}</p>
      <p>Weganin ?: {isVegan}</p>
      <p>
        Food preferences :{" "}
        {foodPreferences.map((selectedFood) => selectedFood.name).join(", ")}
      </p>
      <form className={"UserForm"}>
        User form
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <p>Age</p>
        <input
          type="number"
          placeholder="Age"
          min={0}
          max={50}
          onChange={handleSetUserAge}
          value={userAge}
        />
        <label>
          Is Vegan ?
          <select value={isVegan} onChange={(e) => handleIsVegan(e)}>
            {isVeganOptions.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>
        <p>Food preferences</p>
        {mappedFoodPreferences()}
      </form>
    </>
  );
};

export default UserForm;
