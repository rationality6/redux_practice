import React, {Component} from 'react';
import Increment from '../components/Increment'

import {increment1} from '../actions'
import {connect} from 'react-redux';

class Buttons extends Component {

    render() {
        return (
            <div>
                <Increment onIncrement={this.handleIncrement}></Increment>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         number: state.counter.number,
//     }
// }

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions,dispatch);
    return{
        handleIncrement:() => {dispatch(increment1())},
    };
};

export default connect(mapDispatchToProps)(Buttons);
