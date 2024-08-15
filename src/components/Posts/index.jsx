import { useEffect, useState } from 'react';
import { usePostsContext } from '../../contexts/PostsProvider/PostsProvider';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { useCounterContext } from '../../contexts/CounterProvider/CounterProvider';
import { incrementCounter, decrementCounter } from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const [isMounted, setIsMounted] = useState(true);
  const { postsState, postsDispatch } = usePostsContext();
  const { counterState, counterDispatch } = useCounterContext();

  useEffect(() => {
    //loadPosts(postsDispatch);
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted) {
        dispatch();
      }
    });
    return () => {
      //limpar vazamento de memória ao sair do componente e encerrar a requisição
      setIsMounted(false);
    };
  }, [postsDispatch, isMounted]);

  console.log('counterState', counterState);
  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter: {counterState.counter}+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Counter: {counterState.counter}-</button>

      <h1>POSTS</h1>

      {postsState.loading && (
        <p>
          <strong>Carregando...</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
