import React, {Component,PropTypes} from 'react';
import {Edit, Detail} from './Edit'

export default class UserDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      isEdit: false,
      name: "",
      phone: "",
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)
  }

  handleEdit(){
    this.props.onEdit(this.state.name, this.state.phone)
  }

  handleToggle() {
        if(!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        } else {
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
    }

  handleKeyPress(e){
    if(e.charCode === 13){
      this.handleToggle();
    }
  }

  render(){

    const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );

    const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
            </div>
        );

    const view = this.state.isEdit ? Edit(this.state, this.handleClick, this.handleChange, this.handleKeyPress) : Detail(this.props)

    const blank = (
        <p>Not Selected</p>
    );

    return(
      <div>
        {this.props.isSelected ? view : blank}
        <p>
          <button onClick={this.handleToggle}>
            {this.state.isEdit ? "OK" : "Edit"}
          </button>
          <button onClick={this.props.onRemove}>Remove</button>
        </p>
      </div>
    )
  }
}

UserDetails.defaultProps = {
  contact:{
    name:'',
    phone:'',
  },
  onRemove: () => {console.error('onRemove not defined');},
  onEdit: () => {console.error('onEdit not defined');}
}

UserDetails.propTypes = {
  contact: React.PropTypes.object,
  onRemove: React.PropTypes.func,
  onEdit: React.PropTypes.func,
}
