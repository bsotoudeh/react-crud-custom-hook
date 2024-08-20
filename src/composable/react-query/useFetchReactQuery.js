import { useQuery } from "react-query";
import axios from "axios";

const useFetchReactQuery = (url, options = {}) => {
  return useQuery(
    [url],
    async () => {
      const { data } = await axios.get(url);
      return data;
    },
    options // Allows passing additional options like staleTime, cacheTime, etc.
  );
};

export default useFetchReactQuery;
