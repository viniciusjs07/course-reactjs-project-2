import React, { useContext } from 'react';
import { GlobalContext } from '../../context/App';

export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    contextState,
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState({ ...contextState, counter: contextState.counter + 1 })}>{body}</p>;
};
