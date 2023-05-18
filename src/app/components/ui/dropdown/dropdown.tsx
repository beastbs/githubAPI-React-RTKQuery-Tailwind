import React, { FC } from "react";
import { IDropdown } from "./interfaces";

const Dropdown: FC<IDropdown> = ({ user, onClick }) => {
  return (
    <li
      onClick={() => onClick(user.login)}
      className="py-2 px-4 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
    >
      {user.login}
    </li>
  );
};

export default Dropdown;
