import React from "react";
import { Link } from "react-router-dom";
import { menu } from "./navigation.assets";

const NavigationList = () => {
  return (
    <nav>
      <ul className="flex">
        {menu.map((item) => (
          <li className="ml-3" key={item.id}>
            <Link
              to={item.path}
              className="after:w-[0] after:h-[2px] after:bg-white after:block hover:after:w-[100%]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationList;
