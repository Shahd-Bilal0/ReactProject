import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Contr = new AbortController();

    fetch(url, { signal: Contr.signal })
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
        if (e.name === "AbortError") {
          console.log("Abort Fetch");
        } else {
          setIsPending(false);
          setError(e.message);
        }
      });

    return () => Contr.abort();
  }, [url]);

  return { data, isPending, error };
};
export default FetchData;
