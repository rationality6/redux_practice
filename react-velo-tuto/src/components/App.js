import React, {Component} from 'react';
import Contact from './Contact'
import Decrement from './Decrement'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            value:0,
        };
        this.handleName = this.handleName.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleName(){
        this.setState({
            name: "Hyun"
        })
    }

    handleIncrement(){
        this.setState({
            value: this.state.value + 1
        })
    }

    handleDecrement(){
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return (
            <div>
                <Contact/>
                <button onClick={this.handleName}>Click</button>
                <button onClick={this.handleIncrement}>Increment</button>
                <Decrement onDecrement={this.handleDecrement}></Decrement>
                <h1>Hello {this.state.name}</h1>
                <h1>{this.state.value}</h1>
            </div>
        );
    }
}

export default App;
