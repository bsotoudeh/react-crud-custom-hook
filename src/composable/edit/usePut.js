import axios from "axios";
import { useEffect, useState } from "react";

const usePut = (url, id, putData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    if (!id || !putData) return;

    const putData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.put(`${url}/${id}`, putData);
        setApiData(response.data);
      } catch (error) {
        setServerError(error);
      } finally {
        setIsLoading(false);
      }
    };

    putData();
  }, [url, id, putData]);

  return { isLoading, apiData, serverError };
};

export default usePut;
