import "./Paragraph.css";

const Paragraph = (props) => {
  return <p className={props.className || ""}>{props.paragraphText}</p>;
};

export default Paragraph;
