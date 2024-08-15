import { useEffect, useState } from 'react';
import { usePostsContext } from '../../contexts/PostsProvider/PostsProvider';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
  const [isMounted, setIsMounted] = useState(true);
  const { postsDispatch, postsState } = usePostsContext();

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
  return (
    <div>
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
