import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data!");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setMessageError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setMessageError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, messageError };
};

export default useFetch;
