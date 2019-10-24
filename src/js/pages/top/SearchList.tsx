import React from "react";
import { SearchResult } from "../../utils/ApiClient";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    <List>
      {searchResults.length === 0 && <li>No Results</li>}
      {searchResults.map(item => (
        <ListItem key={item.etag}>
          <Thumbnail>
            <img
              src={item.snippet!.thumbnails!.default!.url}
              alt={item.snippet!.title}
            />
          </Thumbnail>
          <Link to={`/watch/${item.id!.videoId}`}>
            <h3>{item.snippet!.title}</h3>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: 120px;
  margin-right: 10px;
`;

export default SearchList;
