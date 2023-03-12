import { useRouter } from "next/router";
import Textarea from "@/Components/TextArea";
import Inputtag from "@/Components/Inputtag";

import React, { useState } from "react";
import RadioStep from "@/Components/RadioStep";
import CheakStep from "@/Components/Checkbox";
import DrpStep from "@/Components/DrpStep";
import axiosInstance from "@/utils/axiosInstance";

import axios from 'axios';

const handleSubmit = async (formData) => {
  try {
    const response = await axios.post('/api/form', formData);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// Example usage
const formData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  // Add additional fields here for all 14 steps of the stepper form
};
handleSubmit(formData);


const StepperForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} />;
      case 2:
        return <StepTwo previousStep={previousStep} nextStep={nextStep} />;
      case 3:
        return <StepThree previousStep={previousStep} />;
      default:
        return null;
    }
  };

  return (
    <div className=" min-w-min bg-slate-800 ">
      <h1 className="flex justify-center min-w-min font-bold text-3xl  text-white  pt-9">
        Stepper Form
      </h1>

      {renderStep()}
    </div>
  );
};

const StepOne = ({ nextStep }) => {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [summary, setSummary] = useState("");
  const [revenue, setRevenue] = useState("");
  const [money, setMoney] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [available, setAvailble] = useState("");
  const [generateRevenue, setGenerateRevenue] = useState("");
  const [stage, setStage] = useState("");
  const [structure, setStrucuture] = useState("");
  const [pitch, setPitch] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit1 = async (event) => {
    try {
      event.preventDefault();
      // const data={name,title,website,industry,summary,revenue,money,address,country,available,generateRevenue,stage,structure,pitch,pastInvestment,communitySize,raisedMoney,runaway}
      const data = { formData };
      console.log(data, "FormData");
      const response = await axiosInstance.post("/step1/api", formData);
      JSON.stringify(response.data);
      // router.push("/DashBoard");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    nextStep();
  };

  return (
    <div className=" flex flex-col min-w-max   p-12 bg-slate-800">
      <form
      action="/api/form" method="post"
        onSubmit={handleSubmit}
        className="border-2 max-w-xl mx-auto p-6 rounded-lg bg-slate-300  flex flex-col px-20 font-medium text-slate-600"
      >
        <h1 className="flex  font-bold text-2xl text-black border-b-4 w-fit border-slate-800">
          Step:1
        </h1>

        <Inputtag
          type={"text"}
          label={"Company Name:"}
          placeholder={"Enter Your Company Name"}
          onchange={handleInputChange}
          name={"name"}
        />
        <Inputtag
          type={"text"}
          label={"Your Title:"}
          placeholder={"Enter Your Title"}
          onchange={handleInputChange}
          name={"title"}
        />
        <Inputtag
          type={"text"}
          label={"Website:"}
          placeholder={"Enter Your Website"}
          onchange={handleInputChange}
          name={"website"}

        />
        <Inputtag
          type={"text"}
          label={"Industry of Your Company:"}
          placeholder={"Enter Industry of Your Company"}
          onchange={handleInputChange}
          name={"industry"}

        />
        <Textarea  label={"Summary:"} placeholder={"Enter Your Summary"} name={"summary"} 
        />
        <Textarea label={"Revenues:"} placeholder={"Enter Your Revenues"} name={"revenue"}  />
        <Inputtag
          type={"text"}
          placeholder={"write here.."}
          label={"How many Money has your Company received to date?"}
          onchange={handleInputChange}
          name={"money"}

        />
        <Textarea
          label={"Company Address:"}
          
          placeholder={"Enter Your Company Address"}
          onchange={handleInputChange}
          name={"address"}


        />
        <Inputtag
          type={"text"}
          label={"Your Country:"}
          placeholder={"Enter Your Country "}
          onchange={handleInputChange}
          name={"country"}

        />
        <RadioStep
          label={"Yes"}
          label2={"No"}
          p={"Is your Product available in Market ?(For Sale) "}
          onchange={handleInputChange}
          name={"available"}
          name2={"available"}

        />

        <RadioStep
          label={"Yes"}
          label2={"No"}
          p={"Is your Company generating revenues?"}
          onchange={handleInputChange}
          name={"generateRevenue"}
          name2={"generateRevenue"}

        />
        <CheakStep
          p={"Your Company Stage:"}
          label={"Prototype"}
          label2={"Validation"}
          label3={"MVP"}
          label4={"Market Entry"}
          label5={"Scaling"}
          onchange={handleInputChange}
          name={"stage"}

        />

        <DrpStep
          p={"How would you like to structure your raise on Republic?"}
          option1={"Safe"}
          option2={"Debt"}
          onChange={handleInputChange}
          option3={"Convertible"}
          option4={"Equity"}
          option5={"Token sale"}
          option6={"Ursae"}
          option7={"other"}
          
        />

        <Inputtag
          type={"file"}
          label={"Upload Your Pitches:"}
          placeholder={"Enter Your Country "}
          onchange={handleInputChange}
          name={"pitch"}
        />

        <div className="flex justify-center p-2  mt-4 rounded-md bg-blue-600 text-white text-lg font-serif">
          {" "}
          <button type="submit" className="">
            Next
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

const StepTwo = ({ previousStep }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // const data={name,title,website,industry,summary,revenue,money,address,country,available,generateRevenue,stage,structure,pitch,pastInvestment,communitySize,raisedMoney,runaway}
      const data = { formData };
      console.log(data);
      const response = await axiosInstance.post("/step2/api", data);
      JSON.stringify(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    router.push("/FormDone");

  };

  const router = useRouter();

  return (
    <div className="flex flex-col p-12 h-[1024px] md:h-screen  min-w-min bg-slate-800 ">
      <form
      
      action="/api/form" method="post"
        onSubmit={handleSubmit}
        className="border-2  max-w-xl mx-auto p-6 rounded-lg bg-slate-300  flex flex-col px-20"
      >
      <h1 className="flex  font-bold text-2xl text-black border-b-4 w-fit border-slate-800">Step:2</h1>

          <RadioStep p={"My Company has run an Investment Campaign in past?"} label={"Yes"} label2={"No"} name={"pastInvestment"} name2={"pastInvestment"} />
          <DrpStep option1={"0-5k"} option2={"5k-10k"} option3={"50k+"} p={"What's the Rough size of your Community?"} name={"communitySize"} />
          <Inputtag type={"number"} label={"How would you like to  raise on Republic? "} name={"raisedMoney"} />
          <Inputtag type={"number"} label={"How would you characterize your Company's runway?(in months) "}  name={"runaway"}/>

        <RadioStep
          p={"My Company has run an Investment Campaign in past?"}
          label={"Yes"}
          label2={"No"}
        />
        <DrpStep
          option1={"0-5k"}
          option2={"5k-10k"}
          option3={"50k+"}
          p={"What's the Rough size of your Community?"}
        />
        <Inputtag
          type={"number"}
          label={"How would you like to  raise on Republic? "}
          onChange={handleInputChange}
        />
        <Inputtag
          type={"number"}
          label={
            "How would you characterize your Company's runway?(in months) "
          }
          onChange={handleInputChange}
        />

          <div className="flex justify-center   text-lg font-serif flex-row gap-3">
            <button
              type="button"
              onClick={previousStep}
              className="rounded-md bg-blue-600 p-2 px-8 mt-4 text-white"
            >
              Previous
            </button>

            <button type="submit" className="rounded-md bg-blue-600 px-8  mt-4 text-white">
              Submit
            </button>
        </div>
      </form>
    </div>
  );
};

const StepThree = ({ previousStep }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // perform validation
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Credit Card Number:
        <input type="text" name="creditCardNumber" />
      </label>
      <br />
      <label>
        Expiration Date:
        <input type="text" name="expirationDate" />
      </label>
      <br />
      <button type="button" onClick={previousStep}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StepperForm;
