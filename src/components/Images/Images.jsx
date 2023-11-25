import "./Images.css";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import Image from "../Image/Image";

const Images = () => {
  return (
    <div>
      <Image
        linkTo="https://vitejs.dev"
        imageSrc={viteLogo}
        altText="Vite logo"
      />
      <Image
        linkTo="https://react.dev"
        imageSrc={reactLogo}
        altText="React logo"
      />
    </div>
  );
};

export default Images;
