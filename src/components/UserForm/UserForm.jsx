import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    </form>
  );
};

export default UserForm;
