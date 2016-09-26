import React, { Component, PropTypes } from 'react';

class Immutable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            passengers:[
                'Simmon, Robert A.',
                'Taylor, Kathleen R.'
            ],
            ticket:{
                company: 'Dalta',
                flightNo: '0990',
                departure: {
                    airport: 'LAS',
                    time: '2016- 08- 21 T10: 00: 00.000 Z'
                },
                arrival:{
                    airport: 'MIA',
                    time: '2016- 08- 21 T14: 41: 10.000 Z'
                },
                codeshare:[
                    {company:'GL', flightNo:'9840'},
                    {company: 'TM', flightNo: '5010'}
                ]
            }
        }
        this.handleImmutable = this.handleImmutable.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTicket = this.handleChangeTicket.bind(this);
        this.handleChangeWithSpread = this.handleChangeWithSpread.bind(this);
    }

    handleImmutable(){
        let updatedPassengers = this.state.passengers.concat(this.state.name);
        this.setState({passengers:updatedPassengers})
        this.setState({
            name:''
        })
    }

    handleChange(e){
        this.setState({
            name:e.target.value
        })
    }

    handleChangeTicket(){
        let updatedTicket = Object.assign({}, this.state.ticket, {flightNo:'1010'});
        this.setState({ticket:updatedTicket});
    }

    handleChangeWithSpread(){
        this.setState({
            ...this.state,
            ticket:{
                ...this.state.ticket,
                company:'Delle'
            }
        })
    }

    render() {

        const mapToComponent = (data) => {
            return data.map((pass,i)=>{
                return (
                    <div key={i}>{pass}</div>
                )
            })
        }

        return(
            <div>
                {mapToComponent(this.state.passengers)}
                <input
                    type='text'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleImmutable}>Fucking Button</button>
                <div>{this.state.ticket.flightNo}</div>
                <button onClick={this.handleChangeTicket}>Change</button>
                <div>{JSON.stringify(this.state.ticket,null,4)}</div>
                <button onClick={this.handleChangeWithSpread}>ChangeWithSpread</button>
            </div>
        );
    }
}

export default Immutable;
