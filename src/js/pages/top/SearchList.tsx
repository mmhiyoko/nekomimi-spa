import React from "react";
import { SearchResult } from "../../utils/ApiClient";

type Props = {
  isFetching: boolean;
  isError: boolean;
  searchResults: SearchResult[];
};

const SearchList = (props: Props) => {
  const { isFetching, isError, searchResults } = props;
  return (
    <ul>
      {isFetching && <li>Loading...</li>}
      {isError && <li>Error Occured</li>}
      {searchResults.length === 0 && <li>No Results</li>}
      {searchResults.map(item => (
        <li key={item.etag}>{item.snippet!.title}</li>
      ))}
    </ul>
  );
};

export default SearchList;
