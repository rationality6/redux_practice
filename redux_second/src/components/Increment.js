import React, { Component } from 'react';

class Increment extends Component {
  constructor(props) {
    super(props);
  }

  handleIncrement() {
      console.log('increment');
      // this.props.onIncrement
  }

  render() {
    return(
      <div>
          <button onClick={this.handleIncrement}>+1</button>
      </div>
    );
  }
}

export default Increment;
