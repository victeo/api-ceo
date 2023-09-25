import React, { useState, useEffect } from 'react';

function useGetRequest(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGetRequest() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchGetRequest();
  }, [url]);

  return { data, loading, error };
}

export default useGetRequest;
