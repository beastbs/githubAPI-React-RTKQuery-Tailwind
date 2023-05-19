import React, { FC } from "react";
import { IDropdownItem } from "./interfaces";

const DropdownItem: FC<IDropdownItem> = ({ user, onClick }) => {
  return (
    <li
      onClick={() => onClick(user.login)}
      className="py-2 px-4 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
    >
      {user.login}
    </li>
  );
};

export default DropdownItem;
