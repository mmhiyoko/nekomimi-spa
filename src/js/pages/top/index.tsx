import React, { useState } from "react";
import ApiClint, { SearchResult } from "../../utils/ApiClient";
import SearchList from "./SearchList";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const TopPage = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResult] = useState<SearchResult[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const search = async () => {
    try {
      setIsError(false);
      setIsFetching(true);
      const result = await ApiClint.search(searchValue);
      setSearchResult(result);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <>
      <Heading>Top Page</Heading>
      <SearchBar
        isDisabled={isFetching}
        value={searchValue}
        onChange={handleChange}
        onRequestSearch={search}
      />
      <SearchList
        isFetching={isFetching}
        isError={isError}
        searchResults={searchResults}
        onRetry={search}
      />
    </>
  );
};

const Heading = styled.h1`
  font-size: 2rem;
  color: red;
`;

export default TopPage;
