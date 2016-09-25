import React,{Component} from 'react';

export default class ContactDetails extends Component {
    constructor(props){
      super(props);
      this.state = {
        isEdit:false,
        name:"",
        phone:""
      }
      this.handleToggle = this.handleToggle.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle(){
        if(!this.state.isEdit){
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            })
        } else {
              this.handleEdit()
        }
      this.setState({
        isEdit: !this.state.isEdit
      })
    }

    handleEdit(){
      this.props.onEdit(this.state.name, this.state.phone)
    }

    handleChange(e){
      let nextState = {}
      nextState[e.target.name] = e.target.value
      this.setState(nextState)
    }

    render(){

        const details = (
            <div>
                <h2>{this.props.contact.name}</h2>
                <h2>{this.props.contact.phone}</h2>
                <button onClick={this.handleToggle}>Edit</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        );

        const editing = (
          <div>
            <p>
              <input
                  type='text'
                  name='name'
                  placeholder='name'
                  value={this.state.name}
                  onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                  type='text'
                  name='phone'
                  placeholder='phone'
                  value={this.state.phone}
                  onChange={this.handleChange}
              />
            </p>
            <button onClick={this.handleToggle}>Okay</button>
          </div>
        )

        const view = this.state.isEdit ? editing : details

        const blank = (<div>Not selected</div>);

        return(
            <div>
              <h2>Details</h2>
              {this.props.isSelected ? view : blank}
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
