import React from "react";
import RepoCard from "./repoCard";
import { IRepo } from "../../../interfaces";

const RepoCardList = ({ repos }: { repos: IRepo[] }) => {
  return (
    <>
      {repos?.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </>
  );
};

export default RepoCardList;
