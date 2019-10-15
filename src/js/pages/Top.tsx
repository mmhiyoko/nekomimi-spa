import React, { useState } from "react";
import ApiClint from "../utils/ApiClient";

const TopPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const handleClick = async () => {
    const result = await ApiClint.search(searchValue);
    setSearchResult(result);
  };
  return (
    <>
      <h1>Top Page</h1>
      <input type="text" value={searchValue} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        検索
      </button>
      <ul>
        {searchResult.length === 0 && <li>No Results</li>}
        {searchResult.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TopPage;
