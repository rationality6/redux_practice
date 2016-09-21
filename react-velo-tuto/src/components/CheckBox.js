import React, { Component } from 'react';
const propTypes = {

};
const defaultProps = {

};
class CheckBox extends Component {

    // var classes = ['checkbox'];
    // if(this.props.checked ===true){
    //     classes.push('checked');
    // };

    render() {
        return(
            <div>
                <field onClick={this.props.onClick}>
                    <input
                        type='checkbox'
                        id={this.props.name}
                        checked={this.props.checked || false}
                    ></input>
                    <label htmlFor={this.props.name}>
                        {this.props.name}
                    </label>
                </field>
            </div>
        );
    }
}
CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
