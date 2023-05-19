import React, { useState } from "react";
import { Paragraph, Subtitle } from "../../common/typography";
import { useActions } from "../../../hooks/actions";
import { useAppSelector } from "../../../hooks/redux";
import { IRepo } from "../../../interfaces";
import Button from "../../common/button";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.github);
  const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavorite(repo.html_url);
    setIsFav(false);
  };

  return (
    <div className="border py-3 px-5 mb-2 rounded hover:bg-slate-300 hover:shadow-md transition-all">
      <a href={repo.html_url} target="_blanc">
        <Subtitle classes="text-center font-bold">{repo.full_name}</Subtitle>
        <Paragraph classes="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </Paragraph>
        <Paragraph classes="text-sm font-thin">{repo?.description}</Paragraph>

        {!isFav && (
          <Button classes="py-2 px-4  mr-2 bg-yellow-400" onClick={addToFavorite}>
            Add
          </Button>
        )}

        {isFav && (
          <Button classes="py-2 px-4 bg-red-600" onClick={removeFromFavorite}>
            Remove
          </Button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
