import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyFirstComponent from "./components/MyFirstComponent/MyFirstComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyFirstComponent />
    <App />
  </React.StrictMode>
);
