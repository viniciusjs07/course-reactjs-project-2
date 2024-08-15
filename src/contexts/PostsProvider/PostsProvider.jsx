import { useReducer, useContext } from 'react';
import { PostsContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import propTypes from 'prop-types';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);
  return <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePostsContext must be used within a PostsContextProvider');
  }
  return context;
};
