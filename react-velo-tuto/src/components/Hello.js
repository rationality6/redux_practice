import React, {Component} from 'react';
import Square from './Square'
import Ex from './Ex'
import Timer from './Timer'

export default class Hello extends Component {
    colorCycle = ['magenta','yellow','cyan']

    constructor(props){
        super(props);
        this.state={
            number:0,
            shape:'square',
            currentIndex:0
        }
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSub = this.handleClickSub.bind(this);
        this.handleClickChangeShape = this.handleClickChangeShape.bind(this);
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

    handleClickChangeShape(){
        console.log('works');
        this.setState({
            currentIndex: (this.state.currentIndex +1)%3
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
                <div onClick={this.handleClickChangeShape}>
                    <Square type={this.state.shape} width='10vmin' color={this.colorCycle[this.state.currentIndex]}></Square>
                </div>
                <br/>
                <Square type='square' width='10vmin' color='orange'></Square>
                <br/>
                <Square ></Square>
                <Ex></Ex>
                <Timer></Timer>
            </div>
        )
    }
}
