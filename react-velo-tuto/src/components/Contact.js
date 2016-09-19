import React, {Component} from 'react'
import ContactInfo from './ContactInfo'
import ContactDetails from './ContactDetails'

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedKey: -1,
            keyword: '',
            contactData:[
                {name:"Bbet",phone:'310 21349 2348'},
                {name:"Aetty",phone:'210 21349 1234'},
                {name:"Chaly",phone:'110 21349 4321'},
                {name:"Delt",phone:'010 21349 8792'},
            ],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearche = this.handleSearche.bind(this);
    }

    handleChange(evt){
        this.setState({
            keyword: evt.target.value
        })
    }

    handleClick(key){
        this.setState({
            selectedKey: key
        })
        console.log(key,'is selected');
    }

    handleSearche(data){
        data.sort();
        return data = data.filter((x) => {
            return x.name.toLowerCase()
            .indexOf(this.state.keyword.toLowerCase()) > -1;
        })
    }

    render(){
        const mapToComponent = (data) => {
            data = this.handleSearche(data)
            return data.map((contact,i) => {
                return (
                    <ContactInfo
                        contact={contact}
                        key={i}
                        onClick={()=>this.handleClick(i)}
                    />
                )
            })
        }

        return(
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                {mapToComponent(this.state.contactData)}
                <ContactDetails
                    isSelected={this.state.selectedKey != -1}
                    contact={this.handleSearche(this.state.contactData)[this.state.selectedKey]}
                />
            </div>
        )
    }
}
