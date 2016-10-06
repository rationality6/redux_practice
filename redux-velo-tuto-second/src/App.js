import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Home from './components/Home'
import Counter from './containers/Counter'
import Buttons from './containers/Buttons'
import Users from './containers/Users';
import Topics from './containers/Topics'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    | <Link to="/counter">Counter</Link>
                    | <Link to="/buttons">Buttons</Link>
                    | <Link to="/users">Users</Link>
                    | <Link to="/topics">Topics</Link>
                    <hr/>

                    <Match exactly pattern='/' component={Home}></Match>
                    <Match pattern='/counter' component={Counter}></Match>
                    <Match pattern='/buttons' component={Buttons}></Match>
                    <Match pattern='/users' component={Users}></Match>
                    <Match pattern='/topics' component={Topics}></Match>
                </div>
            </Router>
        )
    }
}

export default App;
