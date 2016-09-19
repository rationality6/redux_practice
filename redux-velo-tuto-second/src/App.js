import React,{Component} from 'react';
import Users from './containers/Users';
import Buttons from './containers/Buttons'

class App extends Component {
    render(){
        return(
            <div>
                <Buttons></Buttons>
                <Users></Users>
            </div>
        )
    }
}

export default App;
