import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userAge, setUserAge] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSetUserAge = (event) => {
    const { value } = event.target;
    console.log(value);
    if (value.length === 0 || (value > 0 && value < 99)) {
      setUserAge(value);
    }
  };

  return (
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
      <label>Age</label>
      <input
        type="number"
        placeholder="Age"
        min={0}
        max={50}
        onChange={handleSetUserAge}
        value={userAge}
      />
    </form>
  );
};

export default UserForm;
