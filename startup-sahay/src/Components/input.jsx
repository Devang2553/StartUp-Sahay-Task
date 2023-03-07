import clsx from "clsx";
import React from "react";

const Input = ({ name, id, type, autoComplete, placeholder, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...props}
        className={clsx(
          "relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
          {
            [props.className]: !!props.className,
          }
        )}
      />
    </div>
  );
};

export default Input;
