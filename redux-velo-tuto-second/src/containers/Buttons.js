import React, {Component} from 'react';
import Incre from '../components/Incre'

import {incre, decre, typing} from '../actions'
import {connect} from 'react-redux';

// const defaultProps = {
//     number: -1
// }

class Buttons extends Component {

    constructor(props) {
        super(props);

        this.setText = this.setText.bind(this);
    }

    setText(e){
        console.log(e.target.value);
        const text = e.target.value
        this.props.handleTyping(text)
    }

    render() {
        return (
            <div>
                {this.props.number} |
                {this.props.text}
                <Incre
                    onIncre={this.props.handleIncrement}
                    onDecre={this.props.handleDecrement}
                ></Incre>
            <input
                onChange={this.setText}
                value={this.props.text}
            />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.incre.number,
        text: state.incre.text,
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions,dispatch);
    return{
        handleIncrement:() => {dispatch(incre())},
        handleDecrement:() => {dispatch(decre())},
        handleTyping:(text) => {dispatch(typing(text))}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Buttons);
