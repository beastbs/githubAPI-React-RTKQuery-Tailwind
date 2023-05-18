import React, { FC } from "react";
import { ITypography } from "./interfaces";

const Subtitle: FC<ITypography> = ({ classes, children }) => {
  return <h3 className={classes}>{children}</h3>;
};

export default Subtitle;
