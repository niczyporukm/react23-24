import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  return (
    <form className={"UserForm"}>
      User form
      <input
        type="text"
        placeholder="Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </form>
  );
};

export default UserForm;
