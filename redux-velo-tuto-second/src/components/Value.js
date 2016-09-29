import React, {Component} from 'react';

const defaultProps = {
    number: -1
};

class Value extends Component {
    render() {
        return (
            <div>
                {this.props.number}
            </div>
        );
    }
}

Value.defaultProps = defaultProps;

export default Value;
