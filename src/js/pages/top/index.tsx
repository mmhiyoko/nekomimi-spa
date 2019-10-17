import React, { useState } from "react";
import ApiClint, { SearchResult } from "../../utils/ApiClient";
import SearchList from "./SearchList";

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
      <input type="text" value={searchValue} onChange={handleChange} />
      <button
        type="button"
        disabled={searchValue.trim().length === 0 || isFetching}
        onClick={search}
      >
        検索
      </button>
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
