import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { Paragraph } from "../components/common/typography";
import Button, { ButtonBack } from "../components/common/button";

const FavoritesPage = () => {
  const [hoverFavorite, setHoveredFavorite] = useState<null | string>(null);
  const { favorites } = useAppSelector((state) => state.github);
  const { removeFavorite, removeAll } = useActions();
  const navigate = useNavigate();

  const handleRemoveFavorite = (id: string) => {
    removeFavorite(id);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (favorites.length === 0)
    return <Paragraph classes="text-center">No results.</Paragraph>;
    
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((f) => (
          <li
            className="relative"
            key={f}
            onMouseEnter={() => setHoveredFavorite(f)}
            onMouseLeave={() => setHoveredFavorite(null)}
          >
            <a
              data-tooltip-id="anchor-tooltip"
              data-tooltip-content="Click on link to open"
              href={f}
              target="_blanc"
              className="hover:shadow-md"
            >
              {f}
            </a>
            {hoverFavorite === f && (
              <Button
                classes="absolute text-sm top-[50%] translate-y-[-50%] bg-red-600"
                onClick={() => handleRemoveFavorite(f)}
              >
                Remove
              </Button>
            )}
            <Tooltip id="anchor-tooltip" place="left" />
          </li>
        ))}
        <div className="float-right mt-3">
          <ButtonBack
            classes="py-2 px-4 mr-2 hover:text-white transition:all"
            onGoBack={handleGoBack}
          />
          <Button
            classes="py-2 px-4 bg-red-600 hover:text-white transition:all"
            onClick={() => removeAll()}
          >
            Clear all
          </Button>
        </div>
      </ul>
    </div>
  );
};

export default FavoritesPage;
