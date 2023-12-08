import "./Images.css";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import Image from "../Image/Image";

const Images = (props) => {
  const { timerValue } = props;

  const isOdds = timerValue % 2 === 0;

  return (
    <div>
      {isOdds ? (
        <Image
          linkTo="https://vitejs.dev"
          imageSrc={viteLogo}
          altText="Vite logo"
        />
      ) : (
        <Image
          linkTo="https://react.dev"
          imageSrc={reactLogo}
          altText="React logo"
        />
      )}
    </div>
  );
};

export default Images;
