import ButtonWithIcon from "@/Components/buttonWithIcon";
import React, { useState } from "react";
import Input from "../Components/Inputtag";
import Google from "../../public/google.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: email,
    };
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center w-full  h-screen items-center bg-slate-800">
      <div className="w-auto bg-slate-300 border-2 rounded-xl p-5  flex-col flex gap-2">
        <form onSubmit={handleSubmit} className="  flex-col flex gap-4">
          <h2 className="font-bold text-2xl text-center">
            !!! Forgot Password
          </h2>
          <p className="text-center pb-3">
            Enter your username aor the email address or phone number linked to
            your account.
          </p>
          <div className="flex flex-col gap-1">
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              className="rounded-b-md rounded-t-md"
            />
          </div>
          <button type="submit" className="bg-blue-600 w-full rounded-md p-2">
            <p className="text-white">Next</p>
          </button>
          <a
            href=""
            className="text-center font-normal text-gray-600 hover:text-blue-900 pb-1"
          >
            Can not Reset your Password?
          </a>
        </form>
        <div className="flex-col flex gap-2 ">
        <ButtonWithIcon
            icon={Google}
            class="py-2"
            className="bg-slate-200 w-full rounded-md pl-3"
          >
            Login with Google
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
