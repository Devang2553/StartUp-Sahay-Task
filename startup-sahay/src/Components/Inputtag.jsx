import React from "react";

<<<<<<< HEAD
const Inputtag = ({ label, placeholder, type, onClick,value,onChange,name }) => {
=======
const Inputtag = ({ label, placeholder, type, onClick,value,onChange,autoComplete }) => {
>>>>>>> 54753cf2e01e2ad3dcfd2678c42cb088355fdf04
  return (
    <div  className="flex flex-col border-b-2 pb-4 border-slate-400 w-auto">
      
        <label className="py-2">{label}</label>
        <input
          placeholder={placeholder}
          className=" border-black rounded-md px-10 py-2 w-auto"
          type={type}
          onClick={onClick}
          value={value}
          name={name}
          onChange={onChange}
          required={true}
<<<<<<< HEAD
        
=======
          autoComplete={autoComplete}
>>>>>>> 54753cf2e01e2ad3dcfd2678c42cb088355fdf04
        ></input>
    </div>
  );
};

export default Inputtag;
