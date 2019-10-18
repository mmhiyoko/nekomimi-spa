import React, { useState } from "react";
import ApiClint, { SearchResult } from "../../utils/ApiClient";
import SearchList from "./SearchList";
import SearchBar from "./SearchBar";

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
      <h1>Top Page</h1>
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

export default TopPage;
