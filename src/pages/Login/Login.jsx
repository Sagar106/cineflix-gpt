import { useState } from "react";
import Header from "../../components/Header";
import { bgImage } from "../../constants/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignin = () => {
    setIsSignIn(!isSignIn);
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
          <form className="w-4/12 bg-black/60 flex flex-col gap-4 p-8 rounded">
            <h1 className="text-white text-2xl font-semibold pb-5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            <input
              type="text"
              placeholder="Email"
              className="bg-white p-3 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              className="bg-white p-3 rounded"
            />

            <button className="bg-[#a80000] text-white py-3 rounded font-semibold cursor-pointer hover:bg-[#348fdc]">
              Sign In
            </button>
            <p className="text-white cursor-pointer" onClick={toggleSignin}>
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
