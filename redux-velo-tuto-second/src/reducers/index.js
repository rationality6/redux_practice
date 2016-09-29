import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui'
import incre from './incre'
import users from './users'

const reducers = combineReducers({
    counter, ui, incre, users
});

export default reducers;
