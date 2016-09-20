import React, {Component} from 'react';
import Square from './Square'
import Ex from './Ex'

export default class Hello extends Component {

    constructor(props){
        super(props);
        this.state={
            number:0
        }
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSub = this.handleClickSub.bind(this);
    }

    handleClickAdd(){
        this.setState({
            number: this.state.number+1
        })
    }

    handleClickSub(){
        this.setState({
            number: this.state.number-1
        })
    }

    render() {

        var style = {
            color:'Nave',
            backgroundColor: 'HotPink',
            borderRadius: '0.1em',
        };

        return(
            <div style={style}>
                <h2>{this.state.number}</h2>
                <button onClick={this.handleClickAdd} className='btn btn-primary'>Click+1</button>
                <button onClick={this.handleClickSub} className='btn btn-primary'>Click-1</button>
                <br/>
                <br/>
                <br/>
                <Square type='diamond' width='10vmin' color='blue'></Square>
                <br/>
                <br/>
                <br/>
                <Square type='circle' diameter='10vmin' color='red'></Square>
                <br/>
                <Square type='square' width='10vmin' color='orange'></Square>
                <br/>
                <Square ></Square>
                <Ex></Ex>
            </div>
        )
    }
}
