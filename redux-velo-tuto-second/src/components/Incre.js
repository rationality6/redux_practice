import React, {Component, PropTypes} from 'react';

const propTypes = {
    onIncre: PropTypes.func,
    onDecre: PropTypes.func,
};

const defaultProps = {
    onIncre() {console.warn('Incre is not defined')},
    onDecre() {console.warn('Decre is not defined')}
}

class Incre extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onIncre}>+1</button>
                <button onClick={this.props.onDecre}>-1</button>
            </div>
        );
    }
}

Incre.propTypes = propTypes;
Incre.defaultProps = defaultProps;

export default Incre;
