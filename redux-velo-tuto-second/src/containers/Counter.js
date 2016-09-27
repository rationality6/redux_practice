import React, {Component} from 'react';
import Value from '../components/Value'
import Control from '../components/Control'

// import * as actions from '../actions'
import {increment,decrement,setColor} from '../actions'
import {connect} from 'react-redux';
// import {connect, bindActionCreators} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
        console.log(this);

        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor((Math.random()*55)+ 200),
            Math.floor((Math.random()*55)+ 200),
            Math.floor((Math.random()*55)+ 200),
        ]
        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]})`
        }
        return(
            <div style={style}>Counter
                <Value number={this.props.number}></Value>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                ></Control>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color,
        dumbObject:state.counter.dumbObject
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions,dispatch);
    return{
        handleIncrement:() => {dispatch(increment())},
        handleDecrement:() => {dispatch(decrement())},
        handleSetColor:(color) => {dispatch(setColor(color))}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
