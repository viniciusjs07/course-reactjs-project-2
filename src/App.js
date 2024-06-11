import logo from './logo.svg';
import './App.css';
import React, { useCallback, useState } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementCounter }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementCounter(100)}>+</button>;
});

Button.propTypes = {
  incrementCounter: P.func,
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const classeReverse = 'reverse';

  const incrementCounter = useCallback((number) => {
    setCounter((c) => c + number);
  }, []);

  const handlerReverse = () => {
    setReverse(!reverse);
  };

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverse ? classeReverse : ''}`} alt="logo" />
        <h1>Counter: {counter}</h1>
        <button onClick={handlerReverse}>Reverse</button>
        <Button incrementCounter={incrementCounter}></Button>
      </header>
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
