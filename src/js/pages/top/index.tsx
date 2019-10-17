import React, { useState } from "react";
import ApiClint, { SearchResult } from "../../utils/ApiClient";

const TopPage = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const handleClick = async () => {
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
        onClick={handleClick}
      >
        検索
      </button>
      <ul>
        {isFetching && <li>Loading...</li>}
        {isError && <li>Error Occured</li>}
        {searchResult.length === 0 && <li>No Results</li>}
        {searchResult.map(item => (
          <li key={item.etag}>{item.snippet!.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TopPage;
