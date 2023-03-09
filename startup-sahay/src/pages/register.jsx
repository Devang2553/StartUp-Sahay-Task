import { useRouter } from "next/router";
import React, { useState } from "react";
import ButtonWithIcon from "../Components/buttonWithIcon";
import Input from "../Components/input";
import Fb from "../../public/fb.svg";
import Google from "../../public/google.svg";
import Instagram from "../../public/insta.svg";
import axiosInstance from "@/utils/axiosInstance";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function fbAuth() {
    window.location.href = "http://localhost:3001/api/auth/facebook";
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const router = useRouter();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      const formData = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      console.log(formData);
    }
    // const data = {name, email, password,confirmPassword };
    //   await axiosInstance.post("/users/login", { data });
    // router.push("/login");
  };

  return (
    <div className="flex flex-col justify-center  h-screen items-center bg-slate-800">
      <div className="w-1/3 bg-slate-300 border-2 rounded-xl p-5  flex-col flex gap-2">
        <form onSubmit={handleSubmit} className="  flex-col flex gap-4">
          <h2 className="font-bold text-2xl">Sign Up</h2>
          <div className="flex flex-col gap-1">
            <Input
              id="name"
              name="username"
              type="text"
              placeholder="name"
              value={username}
              onChange={handleUsernameChange}
              className="rounded-t-md"
            />
            <Input
              id="email-address"
              name="userEmail"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              id="password"
              name="userPassword"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Input
              id="confirm-password"
              name="userConfirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="rounded-b-md"
            />
          </div>
          <button type="submit" onClick={()=> router.push('/login')} className="bg-blue-600 w-full rounded-md p-2">
            <p className="text-white">Sign Up</p>
          </button>
          <a
            href=""
            className="text-center font-normal text-gray-600 hover:text-blue-900 pb-1"
          >
            Forgot your password?
          </a>
        </form>

        <div className="flex-col flex gap-2 ">
          <ButtonWithIcon
            icon={Google}
            class="py-2"
            className="bg-slate-200 w-full rounded-md pl-3"
          >
            Sign up with Google
          </ButtonWithIcon>
          <ButtonWithIcon
            icon={Fb}
            class="py-2"
            className="bg-[#1877F2] w-full rounded-md pl-3"
            onClick={fbAuth}
          >
            Sign up with Facebook
          </ButtonWithIcon>
          <ButtonWithIcon
            icon={Instagram}
            class=" pr-5 py-2"
            className="bg-gradient-to-tr from-[#F6e05e] to-[#C026D3] w-full rounded-md pl-3"
          >
            Sign up with Instagram
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
