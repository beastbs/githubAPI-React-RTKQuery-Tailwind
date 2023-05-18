import React, { FC } from "react";
import { ITypography } from "./interfaces";

const Title:FC<ITypography> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Title;
