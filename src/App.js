import './App.css';
import React, { useEffect, useRef, useState } from 'react';
// custom Hook setInterval
//cb = callback
const useCustomHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useCustomHook(() => setCounter((c) => c + 1), delay);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={() => setDelay((d) => d + incrementor)}> +{incrementor}</button>
      <button onClick={() => setDelay((d) => d - incrementor)}> -{incrementor}</button>
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))}></input>
    </>
  );
}

export default App;
