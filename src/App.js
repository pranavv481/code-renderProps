import React, { Component } from 'react';
import './App.css';

import ClickCounterTwo from './components/ClickCounterTwo';
import ClickHoverTwo from './components/ClickHoverTwo';
// import User from './components/User';
import Counter from './components/Counter';



class App extends Component {


  render() {
    return (
      <div className="App">
        <Counter>
          {(count, incrementCount) =>
            <ClickCounterTwo count={count} incrementCount={incrementCount} />}
        </Counter>

        <Counter>
          {(count, incrementCount) =>
            <ClickHoverTwo count={count} incrementCount={incrementCount} />}
        </Counter>

        {/* <ClickCounterTwo />
        <ClickHoverTwo />
        <User render={(isLoggedIn) => isLoggedIn ? 'vishwas' : 'Guest'} /> */}
      </div>
    );
  }
}

export default App;
