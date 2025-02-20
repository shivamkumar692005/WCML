import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signupWithEmail, setSignupWithEmail] = useState(false);
  return (
    <div className="grid md:grid-cols-[minmax(25%,35%)_1fr] grid-cols-1 h-screen relative">
      
      <div className="p-8 bg-[#080808] text-white flex-col justify-center relative gap-5 hidden md:flex">
        <div className="flex items-center space-x-2">
          <img
            src="logo.webp"
            alt="Webflow"
            className="w-13 h-13 rounded-4xl"
          />
          <h2 className="text-xl font-semibold hover:text-gray-500 duration-300 cursor-pointer">
            WCML
          </h2>
        </div>
        <h1 className="text-3xl font-semibold z-1">
          Empower AI, Monetize Innovation – Your ML Hub for Predictions &
          Deployment!
        </h1>
        <button className="bg-blue-500 text-white px-4 py-3 mt-10 rounded-md font-semibold cursor-pointer z-1">
          Discover WCML
        </button>
        <div className="absolute bottom-0 left-0 w-full flex justify-center  md:block">
          <img
            src="https://th.bing.com/th/id/OIP.CD0lIEEEPFWqMRoLIWh0XAHaEK?rs=1&pid=ImgDetMain"
            className="w-full opacity-40 rounded-t-2xl"
            alt="Background"
          />
        </div>
      </div>

      {isSignIn && !signupWithEmail && (
        <div className="bg-gray-100 flex justify-center items-center p-6">
          <div className="w-full max-w-md mx-auto flex flex-col gap-4">
            <h1 className="text-2xl text-black font-bold text-center">
              Sign in to WCML
            </h1>
            <button className="text-black border-1 border-gray-300 px-6 py-3 rounded-4xl font-semibold flex justify-center gap-2 items-center w-full cursor-pointer">
              <GoogleIcon /> Sign in with Google
            </button>

            <div className="flex items-center gap-4 my-4 justify-center">
              <div className="border-b-1 border-gray-300 w-1/4"></div>
              <p className="text-gray-500">or sign in with email</p>
              <div className="border-b-1 border-gray-300 w-1/4"></div>
            </div>

            <div className="flex flex-col gap-4">
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
              />
              <button className="bg-black text-white py-3 rounded-4xl font-semibold cursor-pointer hover:bg-[#565564] w-full">
                Sign in
              </button>
              <button
                className="text-black hover:text-[#565564] cursor-pointer"
                onClick={() => setIsSignIn(false)}
              >
                Don't have an account?{" "}
                <span className="underline">Sign up</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {!isSignIn && !signupWithEmail && (
        <div className="flex flex-col justify-center p-6 gap-6 mx-auto">
          <h1 className="text-2xl text-black font-bold text-">
            Sign up to WCML
          </h1>
          <div className=" w-md md:w-md  flex-col gap-4 justify-center items-center mt-4">
            <button className="text-white  bg-black px-6 py-3 rounded-4xl font-semibold flex justify-center gap-2 items-center w-full hover:bg-[#565564] cursor-pointer">
              <GoogleIcon /> Sign up with Google
            </button>

            <div className="flex items-center gap-4 my-4 justify-center">
              <div className="border-b-1 border-gray-300 w-1/2"></div>
              <p className="text-gray-500">or</p>
              <div className="border-b-1 border-gray-300 w-1/2"></div>
            </div>
            <button
              className="border-1 border-gray-300 py-3 rounded-4xl font-semibold cursor-pointer  w-full"
              onClick={() => {
                setSignupWithEmail(true);
                setIsSignIn(false);
              }}
            >
              Continue with email
            </button>
            <div className="flex justify-center items-center mt-2">
              <button
                className="text-black hover:text-[#565564] cursor-pointer"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                Don't have an account?{" "}
                <span className="underline">Sign up</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {signupWithEmail && (
        <div className="bg-gray-100 flex justify-center items-center p-6">
          <div className="w-full max-w-md mx-auto flex flex-col gap-4 relative">
            <button className="absolute  -left-4 lg:-left-30 border-2 rounded-full cursor-pointer border-gray-300 p-1 font-bold" onClick={() => setSignupWithEmail(false)}>
              <ArrowLeftIcon fontSize="large" />
            </button>
            <h1 className="text-2xl text-black font-bold text-center">
              Sign up to WCML
            </h1>
            <div className="flex gap-4 justify-center items-center mt-4">
              <TextField id="name" label="Name" variant="outlined" fullWidth />
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
              />
            </div>
            <TextField id="email" label="Email" variant="outlined" fullWidth />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
            />
            <button className="bg-black text-white py-3 rounded-4xl font-semibold cursor-pointer hover:bg-[#565564] w-full">
              Sign up
            </button>
            <button
              className="text-black hover:text-[#565564] cursor-pointer"
              onClick={() => {
                setSignupWithEmail(false);
                setIsSignIn(true);
              }}
            >
              Already have an account?{" "}
              <span className="underline">Sign In</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
