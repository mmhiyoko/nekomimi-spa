import React, { useState } from "react";

const TopPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const handleClick = () => {
    // TODO: call api
    console.log(searchValue);
  };
  return (
    <>
      <h1>Top Page</h1>
      <input type="text" value={searchValue} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        検索
      </button>
    </>
  );
};

export default TopPage;
