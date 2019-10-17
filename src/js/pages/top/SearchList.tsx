import React from "react";
import { SearchResult } from "../../utils/ApiClient";

type Props = {
  isFetching: boolean;
  isError: boolean;
  searchResults: SearchResult[];
  onRetry: () => void;
};

const SearchList = (props: Props) => {
  const { isFetching, isError, searchResults, onRetry } = props;
  if (isFetching) {
    return <div>loading</div>;
  }
  if (isError) {
    return (
      <div>
        Error Occured
        <button type="button" onClick={onRetry}>
          再試行
        </button>
      </div>
    );
  }
  return (
    <ul>
      {searchResults.length === 0 && <li>No Results</li>}
      {searchResults.map(item => (
        <li key={item.etag}>{item.snippet!.title}</li>
      ))}
    </ul>
  );
};

export default SearchList;
