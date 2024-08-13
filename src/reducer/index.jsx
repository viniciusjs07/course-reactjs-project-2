import { actions } from './actions';
// o Hook #useReducer deve ser utilizado como manipulação de estados mais complexos
// que requer alguma lógica.
export const reducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('change title here');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};
