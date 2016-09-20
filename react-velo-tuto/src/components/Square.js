import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        var style={
            backgroundColor:this.props.color
        }

        if(this.props.type ==='circle'){
            style.borderRadius = '50%';
            style.width = this.props.diameter;
            style.height = this.props.diameter;
        } else if (this.props.type ==='square'){
            style.width = this.props.width;
            style.height = this.props.width;
            style.borderRadius = this.props.radius;
        } else if (this.props.type == 'diamond') {
            style.width = this.props.width;
            style.height = this.props.width;
            style.transform = 'rotateZ(45deg)';
        }

        return(
            <div style={style}></div>
        );
    }
}

export default Square;
