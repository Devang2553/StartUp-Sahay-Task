import React from "react";

const Inputtag = ({ label, placeholder, type, onclick,value,onchange }) => {
  return (
    <div>
      <form className="flex flex-col border-b-2 pb-4 border-slate-400 w-fit">
        <label className="py-4">{label}</label>
        <input
          placeholder={placeholder}
          className=" border-black rounded-md px-10 py-2 w-96"
          type={type}
          onClick={onclick}
          value={value}
          name={label}
          onChange={onchange}
          required={true}
        ></input>
      </form>
    </div>
  );
};

export default Inputtag;
