import React, { useContext, useState, createContext } from "react";
import { SearchResult } from "../utils/ApiClient";

type Props = {
  children: React.ReactNode;
};

type SearchContenxtValue = {
  query: string;
  results: SearchResult[];
};

const SearchContext: React.Context<{
  value: SearchContenxtValue;
  setValue: React.Dispatch<React.SetStateAction<SearchContenxtValue>>;
}> = createContext<any>(null);

export const useSearchContext = () => useContext(SearchContext);

const SearchContextProvider = (props: Props) => {
  const { children } = props;
  const [value, setValue] = useState<SearchContenxtValue>({
    query: "",
    results: []
  });
  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
