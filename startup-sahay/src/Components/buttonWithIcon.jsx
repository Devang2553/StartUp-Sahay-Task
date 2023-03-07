import clsx from "clsx";
import React from "react";

const ButtonWithIcon = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx("flex items-center gap-1 w-full", {
        [props.className]: !!props.className,
      })}
    >
      {props.icon}
      {props.children}
    </button>
  );
};

export default ButtonWithIcon;
