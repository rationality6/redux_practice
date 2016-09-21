import React, { Component, PropTypes } from 'react';
import CheckBox from './CheckBox';

const propTypes = {

};
const defaultProps = {

};
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:(new Date()).toString(),
            counter:0,
            cb1:{checked: false},
            cb2:{checked: false},
        }
        this.updateTimer = this.updateTimer.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    updateTimer(){
        this.setState({
            date:(new Date()).toString()
        })
    }

    componentDidMount(){
        this.interval = setInterval(this.updateTimer,1)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    handleStart(){
        console.log('start');
        this.setState({
            counter: this.state.counter + 1
        })
        this.intervalSave = setInterval(()=>{
            this.setState({
                counter: this.state.counter + 1
            })
        },1)
    }

    handleStop(){
        console.log('stop');
        clearInterval(this.intervalSave);
    }

    handleReset(){
        console.log('reset');
        this.setState({
            counter:0
        })
    }

    render() {
        return(
            <div>
                <div>{this.state.date}</div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handleReset}>Reset</button>
                <br/>
                <br/>
                <CheckBox name='john' checked={true}></CheckBox>
                <CheckBox name='hyun'></CheckBox>
            </div>
        );
    }
}
Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
