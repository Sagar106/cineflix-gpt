import { useLocation, useNavigate } from "react-router-dom";
import { LogoImage } from "../constants/constants";
import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useState } from "react";

const Header = () => {
  const [signOutError, setSignOutError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isSignedOut = location.pathname === "/";

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setSignOutError(error.message);
      });
  };

  return (
    <div className={`flex justify-between px-5 py-2 bg-linear-to-b from-black`}>
      <img src={LogoImage} width="150px" />
      {!isSignedOut && (
        <button className="cursor-pointer" onClick={handleSignout}>
          Signout
        </button>
      )}
      {signOutError && <p>{signOutError}</p>}
    </div>
  );
};

export default Header;
