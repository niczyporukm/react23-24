import "./Reapeter.css";

const Reapeter = (props) => {
  let valueToRender = [];
  for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    valueToRender.push(props.children);
  }
  return valueToRender;
};

export default Reapeter;
