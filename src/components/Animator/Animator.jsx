import "./Animator.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Images from "../Images/Images";
import Reapeter from "../Reapeter/Reapeter";
import viteLogo from "../../assets/vite.svg";

const Animator = () => {
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue((timerValue) => timerValue + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const shouldDisplayContent = timerValue < 10 || timerValue > 20;

  const repeterIconsCount = timerValue % 10;

  return (
    <>
      <Header headerText={timerValue} />
      {shouldDisplayContent && <Images timerValue={timerValue} />}
      <Reapeter repeatAmount={repeterIconsCount}>
        <img src={viteLogo}></img>
      </Reapeter>
    </>
  );
};

export default Animator;
