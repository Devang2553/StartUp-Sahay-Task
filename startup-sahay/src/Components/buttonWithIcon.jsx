import clsx from "clsx";
import Image from "next/image";
import React from "react";


const ButtonWithIcon = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx("flex items-center gap-1 w-full", {
        [props.className]: !!props.className,
      })}
    >
      <Image src={props.icon} alt="Image" className={props.class}/>
      {props.children}
    </button>
  );
};

export default ButtonWithIcon;
