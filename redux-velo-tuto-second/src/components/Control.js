import React, { Component, PropTypes } from 'react';

const propTypes = {
    onPlue: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function warning(funcName){
    return () => console.warn(funcName + ' is not defined ');
}

const defaultProps = {
    onPlus: warning('onPlue'),
    onSubtract: warning('onSubtract'),
    onRandomizeColor: warning('onRandomizeColor')
};

class Control extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.onPlus} >+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize color</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
