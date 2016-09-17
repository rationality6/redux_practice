import React from 'react';
import Counter from './Counter';
import Users from './Users'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Counter/>
        <Users/>
      </div>
    )
  }
}
