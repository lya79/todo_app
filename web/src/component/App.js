import React, { Component } from 'react';
import SignInApp from './signIn/App';
import TodoApp from './todo/App';


class App extends Component {
  render() {
    return (
      <div>
        {/* <SignInApp /> */}
        <TodoApp />
      </div>
    );
  }
}

export default App;
