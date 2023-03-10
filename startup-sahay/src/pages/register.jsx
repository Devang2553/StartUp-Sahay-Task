
import React, { useState } from "react";
import ButtonWithIcon from "../Components/buttonWithIcon";
import Input from "../Components/input";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { useRouter } from "next/router";

// passport.use(new GoogleStrategy({
//   clientID: "937645517026-vp7n8cvd78dg5jqvb4krmolkdkivdul8.apps.googleusercontent.com",
//   clientSecret: "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",
//   callbackURL: "http://localhost:3000/auth/google/callback"
// },
// function(accessToken, refreshToken, profile, cb) {
//   // You can save the user data to your database or use it as needed
//   return cb(null, profile);
// }));
import Input from "../Components/Inputtag";
import Fb from "../../public/fb.svg";
import Google from "../../public/google.svg";
import Instagram from "../../public/instagram.svg";
import axiosInstance from "@/utils/axiosInstance";
>>>>>>> 54753cf2e01e2ad3dcfd2678c42cb088355fdf04

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useRouter()


  const handleUsernameChange = (event) => {
    setName(event.target.value);
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

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords don't match");
      } else {
        const data = { name, email, password, confirmPassword };
        await axiosInstance.post("/users/register", data);
        router.push("/login");
      }
      // Redirect the user to the dashboard or home page
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      const formData = {
        name: name,
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
  const [error, setError] = useState(null);
  // let history = useNavigate();

  // history("/")

  // function handleLogin() {
  //   axios.get('/auth/google')
  //     .then(res => {
  //       window.location.href = res.data.url;
  //     })
  //     .catch(err => {
  //       setError(err.response.data);
  //     });
  // }




  return (
    <div className="flex flex-col justify-center  h-screen items-center bg-slate-800">
      <div className="w-1/3 min-w-[300px] bg-slate-300 border-2 rounded-xl p-5  flex-col flex gap-2">
        <form onSubmit={handleClick} className="  flex-col flex gap-4">
          <h2 className="font-bold text-2xl">Sign Up</h2>
          <div className="flex flex-col gap-1">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              value={name}
              onChange={handleUsernameChange}
              className="rounded-t-md"
            />
            <Input
              id="email-address"
              name="Email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="rounded-b-md"
            />
          </div>
          <button type="submit" className="bg-blue-600 w-full rounded-md p-2">
            <p className="text-white">Sign Up</p>
          </button>
        </form>
        <a
          href="#"
          onClick={()=>router.push('/login')}
          className="text-center font-normal text-gray-600 hover:text-blue-900 pb-1"
        >
          Already register ?<span className="font-bold"> Click here</span>
        </a>

        <div className="flex-col flex gap-2 ">
          <button onClick={()=>navigate.push("http://localhost:3000/api/google")}>Submit</button>
          <ButtonWithIcon
                

          
            icon={

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
                className="p-2"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>              
              
            }
            className="bg-slate-200 w-full rounded-md pl-3"            
            
            
          >
            Sign up with Google
          </ButtonWithIcon>
          <ButtonWithIcon
            icon={Fb}
            class="py-2"
            className="bg-[#1877F2] w-full rounded-md pl-3"
            className="bg-blue-500 w-full rounded-md pl-3"
            onClick={fbAuth}
          >
            Sign up with Facebook
          </ButtonWithIcon>
          <ButtonWithIcon
            icon={Instagram}
            class="h-9  w-auto"
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
