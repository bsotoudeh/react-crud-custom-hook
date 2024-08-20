import axios from "axios";
import { useEffect, useState } from "react";

const usePost = (url, postData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    if (!postData) return;

    const postData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(url, postData);
        setApiData(response.data);
      } catch (error) {
        setServerError(error);
      } finally {
        setIsLoading(false);
      }
    };

    postData();
  }, [url, postData]);

  return { isLoading, apiData, serverError };
};

export default usePost;
