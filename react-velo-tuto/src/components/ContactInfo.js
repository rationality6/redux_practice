import React, {Component} from 'react';

export default class Contact extends Component {
    render(){
        return(
            <h4 onClick={this.props.onClick}>{this.props.contact.name}{this.props.contact.phone}</h4>
        )
    }
}
