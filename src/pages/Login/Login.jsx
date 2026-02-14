import { useState } from "react";
import Header from "../../components/Header";
import { bgImage } from "../../constants/constants";
import { useRef } from "react";
import { checkValidation } from "../../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignin = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignInClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value,
    );

    setErrorMessage(message);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        <Header />
        <div className="min-h-screen flex items-center justify-center text-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-4/12 bg-black/70 flex flex-col gap-4 p-8 rounded"
          >
            <h1 className="text-white text-2xl font-semibold pb-5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#1C1C1C] p-3 rounded border-[#525151] border text-[#A1A1A1]"
              />
            )}

            <input
              type="text"
              placeholder="Email"
              ref={email}
              className="bg-[#1C1C1C] p-3 rounded border-[#525151] border text-[#A1A1A1]"
            />
            {errorMessage.email && (
              <p className="text-red-600 text-left">{errorMessage.email}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              ref={password}
              className="bg-[#1C1C1C] p-3 rounded border-[#525151] border text-[#A1A1A1]"
            />
            {errorMessage.password && (
              <p className="text-red-600 text-left">{errorMessage.password}</p>
            )}

            <button
              className="bg-[#a80000] text-white py-3 rounded font-semibold cursor-pointer hover:bg-[#348fdc]"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
            <p
              className="text-[#A1A1A1] text-left cursor-pointer hover:text-white hover:underline"
              onClick={toggleSignin}
            >
              {isSignIn
                ? "New to Cineflix? Sign Up"
                : "Already a user? Sign In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
