import FormikForm from "@/Components/formikForm";
import TextInput from "@/Components/textInput";
// import { AuthContext } from "@/Context/authContext";
import React, { useContext } from "react";

const fields = [
  {
    component: TextInput,
    id: "name",
    name: "name",
    autoComplete: "name",
    placeholder: "Name",
    className: "rounded-t-md",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  // {
  //   component: Radio,
  //   id: "gander",
  //   name: "gander",
  //   autoComplete: "gender",
  //   placeholder: "Please Select Gender from list",
  //   options: [
  //     {
  //       id: "male",
  //       label: "Male",
  //     },
  //     {
  //       id: "female",
  //       label: "Female",
  //     },
  //     {
  //       id: "other",
  //       label: "Other",
  //     },
  //   ],
  //   validate: (value) => {
  //     if (!value) return "Required...";
  //     return "";
  //   },
  // },
  // {
  //   component: Checkbox,
  //   id: "hobbies",
  //   name: "hobbies",
  //   placeholder: "Hobbies",
  //   options: [
  //     {
  //       id: "cricket",
  //       label: "Cricket",
  //     },
  //     {
  //       id: "dance",
  //       label: "Dance",
  //     },
  //   ],
  //   validate: (value) => {
  //     if (value.length === 0) return "Required...";
  //     return "";
  //   },
  // },
  {
    component: TextInput,
    id: "age",
    name: "age",
    type: "number",
    autoComplete: "age",
    placeholder: "Age",
    min: 18,
    max: 100,
    validate: (value) => {
      if (!value) return "Required...";
      if (Number(value) < 18) return "min number shuld greater then 18";
      if (Number(value) > 100) return "min number shuld less then 100";
      return "";
    },
  },
  {
    component: TextInput,
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email address",
    validate: (value) => {
      if (!value) return "Required...";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return "Please Enter Valid Email";
      return "";
    },
  },
  {
    component: TextInput,
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "new-password",
    placeholder: "Password",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: TextInput,
    id: "confirm-password",
    name: "confirmPassword",
    type: "password",
    autoComplete: "new-password",
    placeholder: "Confirm Password",
    className: "rounded-b-md",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
];

const Register = () => {
  // const { register } = useContext(AuthContext);

  return (
    <FormikForm
      fields={fields}
      initialValues={{
        name: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      }}
      // onSubmit={register}
      btnText="Sign up"
    />
  );
};

export default Register;
