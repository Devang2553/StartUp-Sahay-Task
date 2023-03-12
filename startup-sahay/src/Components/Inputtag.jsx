import React from "react";

const Inputtag = ({ labal, placeholder, type, onClick,value,onChange,autoComplete,label }) => {
  return (
    <div  className="flex flex-col border-b-2 pb-4 border-slate-400 w-auto">
      
        <label className="py-2">{labal}</label>
        <input
          placeholder={placeholder}
          className=" border-black rounded-md px-10 py-2 w-auto"
          type={type}
          onClick={onClick}
          value={value}
          name={label}
          onChange={onChange}
          required={true}
          autoComplete={autoComplete}
          
          

          
        ></input>
    </div>
  );
};

export default Inputtag;
