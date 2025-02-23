import { useState } from "react";
import { SignIn } from "../components/Auth/signIn";
import { SignUp } from "../components/Auth/signup";
import { SignupWithEmail } from "../components/Auth/signupWithEmail";

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

      {isSignIn && !signupWithEmail && <SignIn setIsSignIn={setIsSignIn} />}

      {!isSignIn && !signupWithEmail && <SignUp setIsSignIn={setIsSignIn} setSignupWithEmail={setSignupWithEmail} isSignIn={isSignIn}/>}

      {signupWithEmail && (
      <SignupWithEmail setSignupWithEmail={setSignupWithEmail} setIsSignIn={setIsSignIn}/>
      )}
    </div>
  );
}