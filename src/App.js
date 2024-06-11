import './App.css';
import React, { useEffect, useMemo, useState } from 'react';

import P from 'prop-types';

const Post = ({ post }) => {
  console.log('filho renderiza');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => setPosts(res));
    }, 5000);
  }, []);

  const PostsMemo = useMemo(() => {
    return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
  }, [posts]);

  console.log('Pai renderiza');
  return (
    <div className="App">
      <input type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
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
