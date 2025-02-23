import { TextField } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export const SignupWithEmail = ({ setSignupWithEmail, setIsSignIn }) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-md mx-auto flex flex-col gap-4 relative">
        <button
          className="absolute  -left-4 lg:-left-30 border-2 rounded-full cursor-pointer border-gray-300 p-1 font-bold"
          onClick={() => setSignupWithEmail(false)}
        >
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
          Already have an account? <span className="underline">Sign In</span>
        </button>
      </div>
    </div>
  );
};
