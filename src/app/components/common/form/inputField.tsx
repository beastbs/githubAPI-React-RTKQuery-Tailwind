import React, { FC } from "react";

export interface ITextField {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<ITextField> = ({ name, value, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      id={name}
      className="border py-2 px-4 w-full h-[42px] mb-2 outline-0 hover:border-none hover:shadow-lg focus:border-none focus:shadow-md"
      placeholder="Search for github user name..."
      value={value}
      onChange={onChange}
    />
  );
};

export default TextField;
