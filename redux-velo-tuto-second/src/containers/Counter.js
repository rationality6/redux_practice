import React, {Component} from 'react';
import Value from '../components/Value'
import Control from '../components/Control'

// import * as actions from '../actions'
import * as actions from '../actions'
import {connect} from 'react-redux';
// import {connect, bindActionCreators} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
        this.handleTextCopy = this.handleTextCopy.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor((Math.random()*55)+ 200),
            Math.floor((Math.random()*55)+ 200),
            Math.floor((Math.random()*55)+ 200),
        ]
        this.props.handleSetColor(color);
    }

    handleTextCopy(e){
        const text = e.target.value
        this.props.handleTextCopy(text)
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
            <p>{this.props.text}</p>
                <input
                    value={this.props.text}
                    onChange={this.handleTextCopy}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color,
        dumbObject: state.counter.dumbObject,
        text: state.typeCopy.text,
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions,dispatch);
    return{
        handleIncrement:() => {dispatch(actions.increment())},
        handleDecrement:() => {dispatch(actions.decrement())},
        handleSetColor:(color) => {dispatch(actions.setColor(color))},
        handleTextCopy:(text) => {dispatch(actions.typeCopy(text))},
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
