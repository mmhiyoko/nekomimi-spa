import React, { useState } from "react";
import styled from "styled-components";
import ApiClint, { SearchResult } from "../../utils/ApiClient";
import SearchList from "./SearchList";
import SearchBar from "./SearchBar";
import useFetchData from "../../utils/react/useFetchData";

const TopPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResult] = useState<SearchResult[]>([]);
  const { isFetching, isError, fetchData: search } = useFetchData(async () => {
    const result = await ApiClint.search(searchValue);
    setSearchResult(result);
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
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
