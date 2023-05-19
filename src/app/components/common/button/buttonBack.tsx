import React from "react";
import { IButtonBack } from "./interfaces";

const ButtonBack = ({ classes, onGoBack }: IButtonBack) => {
  return (
    <button className={`${classes} bg-yellow-400 rounded shadow-md`} onClick={onGoBack}>
      Go back
    </button>
  );
};

export default ButtonBack;
