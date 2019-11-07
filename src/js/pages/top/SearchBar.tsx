import React from "react";
import { useSearchContext } from "../../organisms/SearchContextProvider";

type Props = {
  isDisabled: boolean;
  value: string;
  onRequestSearch: () => void;
};

const SearchBar = (props: Props) => {
  const { value: contextValue, setValue } = useSearchContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...contextValue, query: e.currentTarget.value });
  };
  const { isDisabled, value, onRequestSearch } = props;
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button
        type="button"
        disabled={value.trim().length === 0 || isDisabled}
        onClick={onRequestSearch}
      >
        検索
      </button>
    </>
  );
};

export default SearchBar;
