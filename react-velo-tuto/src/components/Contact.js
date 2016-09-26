import React, {Component} from 'react'
import axios from 'axios'
import R from 'ramda'

import ContactInfo from './ContactInfo'
import ContactDetails from './ContactDetails'
import ContactCreate from './ContactCreate'

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedKey: -1,
            keyword: '',
            contactData:[
                {id: 1, name:"Bbet",phone:'310 21349 2348'},
                {id: 2, name:"Aetty",phone:'210 21349 1234'},
                {id: 3, name:"Chaly",phone:'110 33 4321'},
                {id: 4, name:"Delt",phone:'010 21349 8792'},
                {id: 5, name:"Et",phone:'010 89 81192'},
                {id: 6, name:"Dlet",phone:'0230 21349 2341'},
                {id: 7, name:"Gelte",phone:'01230 234 234'},
                {id: 8, name:"Heeilt",phone:'0110 897 543'},
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearche = this.handleSearche.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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

    handleCreate(contact){
        // this.setState({
        //     contactData:[...this.state.contactData,
        //         contact
        //     ]
        // })

        this.setState({
            contactData:this.state.contactData.concat(contact)
        })
    }

    getDatas(){
        axios.get(`http://localhost:4000/reacts.json`)
            .then((response) => {
                console.log(response);
                this.setState({
                    contactData: response.data
                })
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    componentDidMount() {
        this.getDatas()
    }

    handleRemove(){
        let searchedData = this.handleSearche(this.state.contactData)
        const contactToDelete = searchedData[this.state.selectedKey]

        this.setState({
            selectedKey: -1,
            contactData: R.reject((el) => el.id == contactToDelete.id, this.state.contactData)
        })
    }

    handleEdit(name, phone){
        this.setState({
          contactData:[...this.state.contactData,
            {
                name: name,
                phone: phone
            }
          ]
        })
        console.log(this.state.selectedKey);
        console.log(name,phone);
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
                    className='form-control'
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
            {mapToComponent(this.state.contactData)}
                <ContactDetails
                    isSelected={this.state.selectedKey != -1}
                    contact={this.handleSearche(this.state.contactData)[this.state.selectedKey]}
                    onDelete={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <ContactCreate
                        onCreate = {this.handleCreate}
                ></ContactCreate>
                <br/>
            </div>
        )
    }
}
