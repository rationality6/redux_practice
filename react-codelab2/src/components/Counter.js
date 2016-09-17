import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.callSetTimeout = this.callSetTimeout.bind(this);
    this.stopTimeout = this.stopTimeout.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleClick() {
    console.log('Clicked');
    this.setState({
      value: this.state.value + 1
    })
  }

  callSetTimeout() {
    console.log('SetTimeout works');
    this.anker = setInterval(()=>{
      if (this.state.value >= 399){
        clearInterval(this.anker)
      }
      this.setState({
        value: this.state.value + 1
      })
    },1)
  }

  stopTimeout(){
    console.log("Stop works");
    clearInterval(this.anker);
  }

  resetTimer(){
    console.log('Reset');
    this.setState({
      value:0
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.callSetTimeout}>Counter</button>
        <button onClick={this.stopTimeout}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    )
  }
}
