import React, { Component, PropTypes } from 'react';
import Square from './Square'

class Ex extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        var style = {
            display:'flex',
            flexDirection: 'row',
            padding: '1em'
        }
        return(
            <div style={style}>
                <Square type='square' width='10vmin' color='red' radius='10px'></Square>
                <Square type='circle' diameter='10vmin' color='green'></Square>
                <Square type='circle' diameter='10vmin' color='green'></Square>
                <Square type='circle' diameter='10vmin' color='green'></Square>
                <Square type='circle' diameter='10vmin' color='green'></Square>
            </div>
        );
    }
}

export default Ex;
