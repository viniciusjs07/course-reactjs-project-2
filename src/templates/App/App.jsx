import './App.css';
import React, { useState, useMemo } from 'react';
import { useFetch } from '../../customHooks/useFetch';

export const App = () => {
  const [postId, setPostId] = useState('');

  // useMemo para memoizar o options que é um objeto.
  // Previne que o objeto seja recriado em toda renderização do componente e
  // evita entrar em loop no hook useEffect
  const options = useMemo(
    () => ({
      method: 'GET',
    }),
    [],
  );
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, options);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      {result.length &&
        result.map((res) => (
          <div key={res.id} onClick={() => setPostId(res.id)}>
            <p>{res.title}</p>
          </div>
        ))}
      {!result.length && <p onClick={() => setPostId('')}>{result.title}</p>}
    </>
  );
};

export default App;
