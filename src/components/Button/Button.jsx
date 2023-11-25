import "./Button.css";

const Button = (props) => {
  const { text, onClick } = props;
  return (
    <button onClick={onClick} className={"Button"}>
      {text}
    </button>
  );
};

export default Button;
