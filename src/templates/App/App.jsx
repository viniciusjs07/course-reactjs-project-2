import { PostsProvider } from '../../contexts/PostsProvider/PostsProvider';
import './App.css';
import React from 'react';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider/CounterProvider';

function App() {
  return (
    <>
      <CounterProvider>
        <PostsProvider>
          <Posts />
        </PostsProvider>
      </CounterProvider>
    </>
  );
}

export default App;
