import React, { FC } from "react";
import Dropdown from "./dropdown";
import { IDropdownList } from "./interfaces";

const DropdownList: FC<IDropdownList> = ({ users, isLoading, onClick }) => {
  return (
    <ul className="list-none absolute top-[42px] max-h-[200px] overflow-y-scroll left-0 right-0 shadow-md bg-white">
      {isLoading && <p className="text-center">Loading...</p>}
      {users?.map((user) => (
        <Dropdown key={user.id} user={user} onClick={onClick} />
      ))}
    </ul>
  );
};

export default DropdownList;
