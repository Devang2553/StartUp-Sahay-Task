import { useRouter } from "next/router";
import React, { useState } from "react";
import ButtonWithIcon from "../Components/buttonWithIcon";
import Input from "../Components/input";
import Fb from "../../public/fb.svg";
import Google from "../../public/google.svg";
import Instagram from "../../public/insta.svg";
import axiosInstance, { axiosAuth } from "@/utils/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password };
      const res = await axiosAuth.post("/users/login", { data });

      localStorage.setItem("token", JSON.stringify(res.data));
      // Redirect the user to the dashboard or home page
      router.push("/DashBoard");
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center  h-screen items-center bg-slate-800">
      <div className="w-1/3 bg-slate-300 border-2 rounded-xl p-5  flex-col flex gap-2">
        <form onSubmit={handleClick} className="flex-col flex gap-4">
          <h2 className="font-bold text-2xl">Login</h2>
          <div className="flex flex-col gap-1">
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              className="rounded-t-md"
            />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="rounded-b-md"
            />
          </div>
          <button type="submit" className="bg-blue-600 w-full rounded-md p-2">
            Login
          </button>
        </form>

        <a href="" className="text-center font-light hover:">
          Forgot your password?
        </a>
        <div className="flex-col flex gap-2 ">
          <ButtonWithIcon
            icon={Google}
            class="py-2"
            className="bg-slate-200 w-full rounded-md pl-3"
          >
            Login with Google
          </ButtonWithIcon>
          <ButtonWithIcon
            icon={Fb}
            class="py-2"
            className="bg-[#1877F2] w-full rounded-md pl-3"
          >
            Login with Facebook
          </ButtonWithIcon>
          <ButtonWithIcon
            icon={Instagram}
            class=" pr-5 py-2"
            className="bg-gradient-to-tr from-[#F6e05e] to-[#C026D3] w-full rounded-md pl-3"
          >
            Login with Instagram
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default Login;
