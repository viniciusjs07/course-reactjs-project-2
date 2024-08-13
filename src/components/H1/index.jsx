import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../../context/App';
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const {
    state: { title, counter },
  } = theContext;

  const inputRef = useRef();

  // obtendo o valor do input e inserindo no título
  return (
    <>
      <h1 onClick={() => theContext.changeTitle(inputRef.current.value)}>
        {title} {counter}
      </h1>
      <input type="text" ref={inputRef}></input>
    </>
  );
};
