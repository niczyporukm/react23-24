import "./Image.css";

const Image = (props) => {
  return (
    <a href={props.linkTo} target="_blank" rel="noreferrer">
      <img src={props.imageSrc} className="logo" alt={props.altText} />
    </a>
  );
};

export default Image;
