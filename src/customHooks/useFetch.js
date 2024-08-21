import { useEffect, useState } from 'react';

// custom hook
export const useFetch = (url, options) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const postsRaw = await fetch(url, options);
        const posts = await postsRaw.json();
        setResult(posts);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    };
    fetchData();
  }, [url, options]);

  return [result, loading];
};
