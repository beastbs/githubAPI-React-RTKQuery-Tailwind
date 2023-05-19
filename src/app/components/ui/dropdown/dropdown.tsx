import React, { FC } from "react";
import DropdownItem from "./dropdownItem";
import { IDropdown } from "./interfaces";

const Dropdown: FC<IDropdown> = ({ users, isLoading, onClick }) => {
  return (
    <ul className="list-none absolute top-[42px] max-h-[200px] overflow-y-scroll left-0 right-0 shadow-md bg-white">
      {isLoading && <p className="text-center">Loading...</p>}
      {users?.map((user) => (
        <DropdownItem key={user.id} user={user} onClick={onClick} />
      ))}
    </ul>
  );
};

export default Dropdown;
