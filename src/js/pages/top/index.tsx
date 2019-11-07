import React from "react";
import styled from "styled-components";
import ApiClint from "../../utils/ApiClient";
import SearchList from "./SearchList";
import SearchBar from "./SearchBar";
import useFetchData from "../../utils/react/useFetchData";
import { useSearchContext } from "../../organisms/SearchContextProvider";

const TopPage = () => {
  const { value, setValue } = useSearchContext();
  const { query, results } = value;
  const { isFetching, isError, fetchData: search } = useFetchData(async () => {
    const searchResults = await ApiClint.search(query);
    setValue(state => ({ ...state, results: searchResults }));
  });
  return (
    <>
      <Heading>Top Page</Heading>
      <SearchBar
        isDisabled={isFetching}
        value={query}
        onRequestSearch={search}
      />
      <SearchList
        isFetching={isFetching}
        isError={isError}
        searchResults={results}
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
