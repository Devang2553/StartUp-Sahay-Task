import { useRouter } from "next/router";
import Textarea from "@/Components/Textarea";
import Inputtag from "@/Components/Inputtag";

import React, { useState } from "react";
import RadioStep from "@/Components/RadioStep";
import CheakStep from "@/Components/CheakStep";
import DrpStep from "@/Components/DrpStep";

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
    <div>
      <h1 className="flex justify-center font-bold text-3xl bg-slate-800 text-white  pt-9">Stepper Form</h1>

      {renderStep()}
    </div>
  );
};

const StepOne = ({ nextStep }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);  
    // perform validation
    nextStep();
  };

  return (
    <div className=" flex flex-col p-12 bg-slate-800">

      <form
        onSubmit={handleSubmit}
        className="border-2 max-w-xl mx-auto p-6 rounded-lg bg-slate-300  flex flex-col px-20 font-medium text-slate-600"
      >
      <h1 className="flex  font-bold text-2xl text-black border-b-4 w-fit border-slate-800">Step:1</h1>

        <Inputtag
          type={"text"}
          label={"Company Name:"}
          placeholder={"Enter Your Company Name"}
          onchange={handleInputChange}
        />
        <Inputtag
          type={"text"}
          label={"Your Title:"}
          placeholder={"Enter Your Title"}
          onchange={handleInputChange}
        />
        <Inputtag
          type={"text"}
          label={"Website:"}
          placeholder={"Enter Your Website"}
          onchange={handleInputChange}
        />
        <Inputtag
          type={"text"}
          label={"Industry of Your Company:"}
          placeholder={"Enter Industry of Your Company"}
          onchange={handleInputChange}
        />
        <Textarea label={"Summary:"} placeholder={"Enter Your Summary"} />
        <Textarea label={"Revenues:"} placeholder={"Enter Your Revenues"} />
        <Inputtag
          type={"text"}
          label={"How many Money has your Company received to date?"}
          onchange={handleInputChange}
        />
        <Textarea
          label={"Company Address:"}
          placeholder={"Enter Your Company Address"}
          onchange={handleInputChange}

        />
        <Inputtag
          type={"text"}
          label={"Your Country:"}
          placeholder={"Enter Your Country "}
          onchange={handleInputChange}
        />
        <RadioStep
          label={"Yes"}
          label2={"No"}
          p={"Is your Product available in Market ?(For Sale) "}
          onchange={handleInputChange}

        />

        <RadioStep
          label={"Yes"}
          label2={"No"}
          p={"Is your Company generating revenues?"}
          onchange={handleInputChange}

        />
        <CheakStep
          p={"Your Company Stage:"}
          label={"Prototype"}
          label2={"Validation"}
          label3={"MVP"}
          label4={"Market Entry"}
          label5={"Scaling"}
          onchange={handleInputChange}

        />

        <DrpStep p={"How would you like to structure your raise on Republic?"} option1={"Safe"} option2={"Debt"}
          onchange={handleInputChange}
          option3={"Convertible"} option4={"Equity"} option5={"Token sale"} option6={"Ursae"} option7={"other"}  />

        <Inputtag
          type={"file"}
          label={"Upload Your Pitches:"}
          placeholder={"Enter Your Country "}
          onchange={handleInputChange}
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
  const handleSubmit = (event) => {
    event.preventDefault();
    // perform validation
  };

  const router=useRouter();

  return (
    <div className="flex flex-col p-12 bg-slate-800">

      <form
        onSubmit={handleSubmit}
        className="border-2  max-w-xl mx-auto p-6 rounded-lg bg-slate-300  flex flex-col px-20"
      >
      <h1 className="flex  font-bold text-2xl text-black border-b-4 w-fit border-slate-800">Step:2</h1>

        <RadioStep p={"My Company has run an Investment Campaign in past?"} label={"Yes"} label2={"No"} />
        <DrpStep option1={"0-5k"} option2={"5k-10k"} option3={"50k+"} p={"What's the Rough size of your Community?"} />
        <Inputtag type={"number"} label={"How would you like to  raise on Republic? "} />
        <Inputtag type={"number"} label={"How would you characterize your Company's runway?(in months) "} />


        <div className="flex justify-center   text-lg font-serif flex-row gap-3">
          <button
            type="button"
            onClick={previousStep}
            className="rounded-md bg-blue-600 p-2 px-8 mt-4 text-white"
          >
            Previous
          </button>

          <button type="submit" onClick={()=>router.push('/DashBoard')} className="rounded-md bg-blue-600 px-8  mt-4 text-white">
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
      <button type="submit" >Submit</button>
    </form>
  );
};

export default StepperForm;