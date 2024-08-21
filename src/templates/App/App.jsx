import './App.css';
import React from 'react';
import { useAsync } from '../../customHooks/useAsync';
import { STATUS } from '../../utils/types';
const fetchData = async () => {
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await postsRaw.json();
};
export const App = () => {
  const [, result, error, status] = useAsync(fetchData, true);
  if (status === STATUS.IDLE) {
    return <pre>Not result</pre>;
  }
  if (status === STATUS.PENDING) {
    return <pre>Loading...</pre>;
  }
  if (status === STATUS.ERROR) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (status === STATUS.SUCCESS) {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
  return null;
};

export default App;
