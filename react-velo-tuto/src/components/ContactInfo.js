import React, {Component} from 'react';

export default class Contact extends Component {
    render(){
        return(
            <div onClick={this.props.onClick}>{this.props.contact.name}{this.props.contact.phone}</div>
        )
    }
}
