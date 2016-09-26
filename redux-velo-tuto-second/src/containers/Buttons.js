import React, {Component} from 'react';
import Increment from '../components/Increment'

const propTypes = {};
const defaultProps = {};
class Buttons extends Component {
    render() {
        return (
            <div>
                <Increment></Increment>
            </div>
        );
    }
}
Buttons.propTypes = propTypes;
Buttons.defaultProps = defaultProps;
export default Buttons;
