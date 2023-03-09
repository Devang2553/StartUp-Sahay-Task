import CheakStep from '@/Components/CheakStep'
import DrpStep from '@/Components/DrpStep'
import Inputtag from '@/Components/Inputtag'
import RadioStep from '@/Components/RadioStep'
import Textarea from '@/Components/Textarea'
import axiosInstance from '@/utils/axiosInstance'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({});
    const [name,setName]= useState("")
    const [title,setTitle]= useState("")
    const [website,setWebsite]= useState("")
    const [industry,setIndustry]= useState("")
    const [summary,setSummary]= useState("")
    const [revenue,setRevenue]= useState("")
    const [money,setMoney]= useState("")
    const [address,setAddress]= useState("")
    const [country,setCountry]= useState("")
    const [available,setAvailble]= useState("")
    const [generateRevenue,setGenerateRevenue]= useState("")
    const [stage,setStage]= useState("")
    const [structure,setStrucuture]= useState("")
    const [pitch,setPitch]= useState("")
    const [pastInvestment,setPastInvestment]= useState("")
    const [communitySize,setCommunitySize]= useState("")
    const [raisedMoney,setRaisedMoney]= useState("")
    const [runaway,setRunaway]= useState("")


    const router=useRouter()



    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        const data={formData}
      console.log(data);
    const response = await axiosInstance.post('/form/api', data);
    JSON.stringify(response.data);
    router.push('/DashBoard')
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className=" flex flex-col p-12 bg-slate-800">

    <form
    action="/api/form" method="post"
      onSubmit={handleSubmit}
      className="border-2 max-w-xl mx-auto p-6 rounded-lg bg-slate-300  flex flex-col px-20 font-medium text-slate-600"
    >
    <h1 className="flex  font-bold text-2xl text-black border-b-4 w-fit border-slate-800">Step:1</h1>

      <Inputtag
        type={"text"}
        label={"Company Name:"}
        placeholder={"Enter Your Company Name"}
        onChange={handleInputChange}
        name={"name"}
      />
      <Inputtag
        type={"text"}
        label={"Your Title:"}
        placeholder={"Enter Your Title"}
        onChange={handleInputChange}
        name={"title"}
      />
      <Inputtag
        type={"text"}
        label={"Website:"}
        placeholder={"Enter Your Website"}
        onChange={handleInputChange}
        name={"website"}

      />
      <Inputtag
        type={"text"}
        label={"Industry of Your Company:"}
        placeholder={"Enter Industry of Your Company"}
        onChange={handleInputChange}
        name={"industry"}

      />
      <Textarea  label={"Summary:"} placeholder={"Enter Your Summary"} name={"summary"} 
      />
      <Textarea label={"Revenues:"} placeholder={"Enter Your Revenues"} name={"revenue"}  />
      <Inputtag
        type={"text"}
        label={"How many Money has your Company received to date?"}
        onChange={handleInputChange}
        name={"money"}

      />
      <Textarea
        label={"Company Address:"}
        placeholder={"Enter Your Company Address"}
        onChange={handleInputChange}
        name={"address"}


      />
      <Inputtag
        type={"text"}
        label={"Your Country:"}
        placeholder={"Enter Your Country "}
        onChange={handleInputChange}
        name={"country"}

      />
      <RadioStep
        label={"Yes"}
        label2={"No"}
        p={"Is your Product available in Market ?(For Sale) "}
        onChange={handleInputChange}
        name={"available"}
        name2={"available"}

      />

      <RadioStep
        label={"Yes"}
        label2={"No"}
        p={"Is your Company generating revenues?"}
        onChange={handleInputChange}
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
        onChange={handleInputChange}
        name={"stage"}

      />

      <DrpStep p={"How would you like to structure your raise on Republic?"} name={"structure"} option1={"Safe"} option2={"Debt"}
        onChange={handleInputChange}
        option3={"Convertible"} option4={"Equity"} option5={"Token sale"} option6={"Ursae"} option7={"other"}  />

      <Inputtag
        type={"file"}
        label={"Upload Your Pitches:"}
        placeholder={"Enter Your Country "}
        onChange={handleInputChange}
        name={"pitch"}
      />

     
      <RadioStep p={"My Company has run an Investment Campaign in past?"} label={"Yes"} label2={"No"} name={"pastInvestment"} name2={"pastInvestment"} />
        <DrpStep option1={"0-5k"} option2={"5k-10k"} option3={"50k+"} p={"What's the Rough size of your Community?"} name={"communitySize"} />
        <Inputtag type={"number"} label={"How would you like to  raise on Republic? "} name={"raisedMoney"} />
        <Inputtag type={"number"} label={"How would you characterize your Company's runway?(in months) "}  name={"runaway"}/>


        <div className="flex justify-center   text-lg font-serif flex-row gap-3">
       
          <button type="submit" className="rounded-md bg-blue-600 px-8  mt-4 text-white py-2">
            Submit
          </button>
</div>
    </form>
  </div>
  )
}

export default Form