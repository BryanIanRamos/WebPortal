import React, { useEffect, useState } from "react";
import { userData } from "./helper";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { jwt } = userData();

  // console.log("jwt", jwt);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`, // Include the bearer token in the Authorization header
      },
    };

    fetch(api, requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not fetch");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("Data::", data);
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(true);
      });
  }, [jwt]);

  return { data, loading, error };
};

export default useFetch;
