import './App.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import P from 'prop-types';

const Post = ({ post, handleClick }) => {
  console.log('filho renderiza');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }).isRequired,
  handleClick: P.func.isRequired,
};

/**
 * Send the post title in the search input when the
 *  title is clicked. Using useRef to assign input focus
 *
 * @returns
 */
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  // useRef is used to get element from DOM and apply its functions from the element.
  const inputRef = useRef(null);
  const counter = useRef(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, [value]);

  useEffect(() => {
    //Using useRef only the counter is rendered and does not render all component.
    // The same case does not occur if you use useState,
    // where all component is rendered.
    counter.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  const PostsMemo = useMemo(() => {
    return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />);
  }, [posts]);

  console.log('Pai renderiza');
  return (
    <div className="App">
      <h6>Renderizou: {counter.current} X</h6>
      <input ref={inputRef} type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
      {PostsMemo}
      {posts.length <= 0 && <p>Carregando...</p>}
    </div>
  );
}

// example classe component with life cycle and state

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { reverse: false };

//     this.handlerReverse = this.handlerReverse.bind(this);
//   }

//   handlerReverse() {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   }
//   render() {
//     const { reverse } = this.state;
//     const classeReverse = 'reverse';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverse ? classeReverse : ''}`} alt="logo" />
//           <button onClick={this.handlerReverse}>Reverse</button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
