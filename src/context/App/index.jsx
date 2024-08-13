import { createContext, useReducer } from 'react';
import { globalState } from './data';
import PropTypes from 'prop-types';
import { reducer } from '../../reducer/index';
import { actions } from '../../reducer/actions';

export const GlobalContext = createContext();

// useContext com useReducer
// Removendo useState e inserindo useReduce para controlar estado
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };
  return <GlobalContext.Provider value={{ state, changeTitle }}>{children}</GlobalContext.Provider>;
};

AppContext.propTypes = {
  children: PropTypes.element.isRequired,
};
