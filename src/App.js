import './App.css';
import React from 'react';
import { AppContext } from './context/App';
import { Div } from './components/Div';

function App() {
  return (
    <>
      <AppContext>
        <Div></Div>
      </AppContext>
    </>
  );
}

export default App;
