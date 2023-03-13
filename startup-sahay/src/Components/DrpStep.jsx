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
  onChange
}) => {
  return (
    <div className="flex flex-col pt-4 border-b-2 pb-4 border-slate-400 ">
      <p className="py-4">{p}</p>

      <div>
        <select name="Drop" id="Drop" className="w-auto rounded-md p-2"  required={true} onChange={onChange}>
          <option value={option1} label={option1}>{option1}</option>
          <option value={option2} label={option2}>{option2}</option>
          <option value={option3} label={option3}>{option3}</option>
          <option value={option4} label={option4}>{option4}</option>
          <option value={option5} label={option5}>{option5}</option>
          <option value={option6} label={option6}>{option6}</option>

          <option value="4">{option7}</option>
        </select>
      </div>
    </div>
  );
};

export default DrpStep;
