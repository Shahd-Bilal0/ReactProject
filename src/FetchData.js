import React from "react";
import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(`HTTP ${url} error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        setIsPending(false);
        setError(e.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default FetchData;
