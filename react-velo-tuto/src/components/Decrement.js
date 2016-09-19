import React,{Component} from 'react';

export default class Decrement extends Component {

    render(){
        return(
            <div>
                <button onClick={this.props.onDecrement}>Decrement</button>
            </div>
        )
    }
}
