import axios from "axios";
import { useEffect, useState } from "react";

const useDelete = (url, id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const deleteData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.delete(`${url}/${id}`);
        setApiData(response.data);
      } catch (error) {
        setServerError(error);
      } finally {
        setIsLoading(false);
      }
    };

    deleteData();
  }, [url, id]);

  return { isLoading, apiData, serverError };
};

export default useDelete;
