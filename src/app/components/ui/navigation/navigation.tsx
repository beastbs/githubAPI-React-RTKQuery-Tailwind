import React from "react";
import Logo from "./logo";
import NavigationList from "./navigationList";

const Navigation = () => {
  return (
    <div className="flex justify-between text-xl items-center h-[60px] px-5 shadow-md bg-slate-700 text-white">
      <Logo />
      <NavigationList />
    </div>
  );
};

export default Navigation;
