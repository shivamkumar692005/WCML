import GoogleIcon from "@mui/icons-material/Google";

export const SignUp = ({ setIsSignIn, setSignupWithEmail, isSignIn }) => {
    return (
      <div className="flex flex-col justify-center p-6 gap-6 mx-auto my-auto">
        <h1 className="text-2xl text-black font-bold text-">Sign up to WCML</h1>
        <div className=" w-80 md:w-md  flex-col gap-4 justify-center items-center mt-4">
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
              Don&apos;t have an account?{" "}
              <span className="underline">Sign up</span>
            </button>
          </div>
        </div>
      </div>
    );
  };