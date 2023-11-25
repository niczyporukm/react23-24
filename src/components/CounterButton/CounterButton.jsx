import "./CounterButton.css";
import { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleRightMouseButtonClick = (event) => {
    event.preventDefault();
    count > 0 && setCount((prevCountValue) => prevCountValue - 1);
  };

  return (
    <button
      onContextMenu={handleRightMouseButtonClick}
      onClick={() => setCount((prevCountValue) => prevCountValue + 1)}
    >
      count is {count}
    </button>
  );
};

export default CounterButton;
