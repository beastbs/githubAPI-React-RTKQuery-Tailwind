import React, { useState, useEffect } from "react";
import {
  useSearchUsersQuery,
  useLazyGetUserReposQuery,
} from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import { DropdownList } from "../components/ui/dropdown";
import { Paragraph } from "../components/common/typography";
import RepoCardList from "../components/ui/repoCard";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
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
    setDropdown(debounced.length >= 3 && users?.length! > 0);
  }, [debounced, users]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <div className="flex justify-center h-screen w-screen pt-10 mx-auto">
      {isError && (
        <Paragraph classes="text-center text-red-600">
          Something went wrong...
        </Paragraph>
      )}
      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2 outline-0 hover:border-none hover:shadow-lg focus:border-none focus:shadow-md"
          placeholder="Search for github user name..."
          value={search}
          onChange={handleChange}
        />

        {dropdown && (
          <DropdownList
            isLoading={isLoading}
            users={users}
            onClick={clickHandler}
          />
        )}

        <div className="container">
          {areReposLoading && (
            <Paragraph classes="text-center">Repos are loading...</Paragraph>
          )}
          {repos && <RepoCardList repos={repos}/>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
