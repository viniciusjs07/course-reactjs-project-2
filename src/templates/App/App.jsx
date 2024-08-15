import { PostsProvider } from '../../contexts/PostsProvider/PostsProvider';
import './App.css';
import React from 'react';
import { Posts } from '../../components/Posts';

function App() {
  return (
    <>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </>
  );
}

export default App;
