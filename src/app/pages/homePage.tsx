import React, { useState, useEffect } from "react";
import {
  useSearchUsersQuery,
  useLazyGetUserReposQuery,
} from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import Dropdown from "../components/ui/dropdown";
import { Paragraph } from "../components/common/typography";
import RepoCardList from "../components/ui/repoCard";
import { TextField } from "../components/common/form";

const HomePage = () => {
  const [data, setData] = useState({
    search: "",
  });
  const [isDropdown, setIsDropdown] = useState(false);
  const debounced = useDebounce(data.search);
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "INPUT") {
        setIsDropdown(true);
      } else {
        setIsDropdown(false);
      }
    });
  });

  useEffect(() => {
    setIsDropdown(debounced.length >= 3 && users?.length! > 0);
  }, [debounced, users]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setIsDropdown(false);
  };

  return (
    <div className="flex justify-center h-screen w-screen pt-10 mx-auto">
      {isError && (
        <Paragraph classes="text-center text-red-600">
          Something went wrong...
        </Paragraph>
      )}
      <div className="relative w-[560px]">
        <TextField name="search" value={data.search} onChange={handleChange} />
        {isDropdown && (
          <Dropdown
            isLoading={isLoading}
            users={users}
            onClick={clickHandler}
          />
        )}

        <div className="container">
          {areReposLoading && (
            <Paragraph classes="text-center">Repos are loading...</Paragraph>
          )}
          {repos && <RepoCardList repos={repos} />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
