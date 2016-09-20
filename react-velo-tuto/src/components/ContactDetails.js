import React,{Component} from 'react';

export default class ContactDetails extends Component {
    render(){

        const details = (
            <div>
                <h2>{this.props.contact.name}</h2>
                <h2>{this.props.contact.phone}</h2>
            </div>
        );
        const blank = (<div>Not selected</div>);

        return(
            <div>
                {this.props.isSelected ? details : blank}
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contact:{
        name:'',
        phone:''
    }
}
