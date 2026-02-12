import { LogoImage } from "../constants/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black">
      <img src={LogoImage} width="200px" />
    </div>
  );
};

export default Header;
