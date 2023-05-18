import React from "react";
import { useAppSelector } from "../hooks/redux";
import { Paragraph } from "../components/common/typography";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0)
    return <Paragraph classes="text-center">No results.</Paragraph>;
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((f) => (
          <li key={f}>
            <a href={f} target="_blanc" className="hover:shadow-md">{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
