import React, {Component, PropTypes} from 'react';

const propTypes = {
    onIncrement: PropTypes.func
};

const defaultProps = {
    onIncrement() {
        console.warn('onIncrement is not defined');
    }
}

class Increment extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onIncrement}>+1</button>
            </div>
        );
    }
}

Increment.propTypes = propTypes;
Increment.defaultProps = defaultProps;

export default Increment;
