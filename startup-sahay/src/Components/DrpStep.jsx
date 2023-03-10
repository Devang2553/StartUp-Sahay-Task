import React from "react";

const DrpStep = ({
  p,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  onChange,
  name
}) => {
  return (
    <div className="flex flex-col pt-4 border-b-2 pb-4 border-slate-400 ">
      <p className="py-4">{p}</p>

      <form>
        <select name={name} id="Drop" className="w-96 rounded-md p-2" required={true} onChange={onChange}>
          <option value="1">{option1}</option>
          <option value="2">{option2}</option>
          <option value="3">{option3}</option>
          <option value="4">{option4}</option>
          <option value="4">{option5}</option>
          <option value="4">{option6}</option>

          <option value="4">{option7}</option>
        </select>
      </div>
    </div>
    
  );
};

export default DrpStep;
