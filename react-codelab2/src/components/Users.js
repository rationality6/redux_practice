import React from 'react';
import UserDetails from './UserDetails'
import update from 'react-addons-update'
import UserCreate from './UserCreate'

class UserInfo extends React.Component {
  render(){
    return(
      <div onClick={this.props.onClick}>{this.props.contact.name}</div>
    )
  }
}

export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
      selectedKey:-1,
      contactData:[{
        name: 'Dbet',
        phone: '010-3444-3222',
      },{
        name: 'Aetty',
        phone: "010-3343-4432",
      },{
        name: 'Charlie',
        phone: '010-2134-4311',
      },{
        name: 'Bharlie',
        phone: '001-2134-4311',
      },{
        name: 'Eharlie',
        phone: '301-2134-4311',
      }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount(){
    const contactData = localStorage.contactData;

    if(contactData) {
      this.setState({
        contactData: JSON.parse(contactData)
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)){
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
  }

  handleChange(e){
    this.setState({
      keyword: e.target.value
    })
  }

  handleClick(key){
    this.setState({
      selectedKey: key
    })
    console.log(`${key}`);
  }

  handleCreate(contact){
    this.setState({
      contactData: update(this.state.contactData,{$push:[contact]})
    });
  }

  handleRemove(){
    if(this.state.selectedKey < 0){
      return;
    }
    this.setState({
      contactData: update(this.state.contactData,
        {$splice: [[this.state.selectedKey,1]]}
      ),
      selectedKey: -1
    });
  }

  handleEdit(name, phone){
    this.setState({
      contactData: update(this.state.contactData,
        {
          [this.state.selectedKey]: {
            name:{ $set: name},
            phone:{$set: phone}
          }
        }
      )
    })
  }

  render(){
    const mapToComponents = (data) =>{
      data.sort();
      data = data.filter(
        (contact)=>{
          return contact.name.toLowerCase()
          .indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );
      return data.map((contact,i) => {
        return (<UserInfo
          contact={contact}
          key={i}
          onClick={()=>this.handleClick(i)}/>)
      });
    };

    return(
      <div>
        <input
          name="keyword"
          placeholder='Search'
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <UserDetails
          isSelected={this.state.selectedKey != -1}
          contact={this.state.contactData[this.state.selectedKey]}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
        <UserCreate
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
