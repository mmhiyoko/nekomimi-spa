import { useState } from "react";

const useFetchData = (promiseFn: () => Promise<void>) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const fetchData = async () => {
    try {
      setIsError(false);
      setIsFetching(true);
      await promiseFn();
    } catch (e) {
      setIsError(true);
    } finally {
      setIsFetching(false);
    }
  };
  return { isFetching, isError, fetchData };
};

export default useFetchData;
