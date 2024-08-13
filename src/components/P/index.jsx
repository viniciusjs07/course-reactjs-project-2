import React, { useContext } from 'react';
import { GlobalContext } from '../../context/App';

export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { body },
  } = theContext;
  return <p>{body}</p>;
};
