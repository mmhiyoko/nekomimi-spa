import React from "react";

type Props = {
  isDisabled: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRequestSearch: () => void;
};

const SearchBar = (props: Props) => {
  const { isDisabled, value, onChange, onRequestSearch } = props;
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
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
