import React, {Component} from 'react';
import Users from './containers/Users';
import Buttons from './containers/Buttons'
import Counter from './containers/Counter'

class App extends Component {
    render() {
        return (
            <div>
                <Buttons></Buttons>
                <Users></Users>
                <Counter />
            </div>
        )
    }
}

export default App;
