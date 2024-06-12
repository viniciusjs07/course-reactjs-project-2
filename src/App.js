import './App.css';
import React, { createContext, useContext, useState } from 'react';

// import P from 'prop-types';

const globalState = {
  title: 'Title of context',
  body: 'Body of context',
  counter: 0,
};

const GlobalContext = createContext();

const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    contextState,
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState({ ...contextState, counter: contextState.counter + 1 })}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
