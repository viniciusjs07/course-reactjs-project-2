import './App.css';
import React, { useReducer } from 'react';
import { globalState } from './context/App/data';

// o Hook #useReducer deve ser utilizado como manipulação de estados mais complexos
// que requer alguma lógica.
const reducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case 'change': {
      console.log('change state type');
      return { ...state, title: 'Change title' };
    }
    case 'invert': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <h2>{body}</h2>
      <button onClick={() => dispatch({ type: 'change' })}>Click</button>
      <button onClick={() => dispatch({ type: 'invert' })}>Invert</button>
    </div>
  );
}

export default App;
