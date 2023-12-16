import "./CounterButton.css";
import { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prevCountValue) => prevCountValue + 1)}>
      count is {count}
    </button>
  );
};

export default CounterButton;
