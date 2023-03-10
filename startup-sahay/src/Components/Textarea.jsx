import React from "react";

const Textarea = ({ desc, label, placeholder }) => {
  return (
    <div className="flex flex-col border-b-2 pb-4 border-slate-400">
      <label className="py-4">{label}</label>
      <textarea
        rows={4}
        cols={20}
        name={label}
        className="rounded-md pl-8"
        placeholder={placeholder}
        required={true}
      >
        {desc}
      </textarea>
    </div>
  );
};

export default Textarea;
