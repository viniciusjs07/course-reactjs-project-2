import { useReducer, useContext } from 'react';
import { data } from './data';
import { reducer } from './reducer';
import propTypes from 'prop-types';
import { CounterContext } from './context';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);
  return <CounterContext.Provider value={{ counterState, counterDispatch }}>{children}</CounterContext.Provider>;
};

CounterProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('CounterContext must be used within a CounterContextProvider');
  }
  return context;
};
