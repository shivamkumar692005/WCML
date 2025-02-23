import { TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";

export const SignIn = ({ setIsSignIn }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center p-6">
        <div className="w-full max-w-md mx-auto flex flex-col gap-4">
          <h1 className="text-2xl text-black font-bold text-center">
            Sign in to WCML
          </h1>
          <button className="text-black border-1 border-gray-300 px-6 py-3 rounded-4xl font-semibold flex justify-center gap-2 items-center w-full cursor-pointer">
            <GoogleIcon /> Sign in with Google
          </button>

          <div className="flex items-center gap-4 my-4 justify-center">
            <div className="border-b-1 border-gray-300 w-1/5 md:w-1/4"></div>
            <p className="text-gray-500">or sign in with email</p>
            <div className="border-b-1 border-gray-300 w-1/5 md:w-1/4"></div>
          </div>

          <div className="flex flex-col gap-4">
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
            />
            <button className="bg-black text-white py-3 rounded-4xl font-semibold cursor-pointer hover:bg-[#565564] w-full">
              Sign in
            </button>
            <button
              className="text-black hover:text-[#565564] cursor-pointer"
              onClick={() => setIsSignIn(false)}
            >
              Don&apos;t have an account?{" "}
              <span className="underline">Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
