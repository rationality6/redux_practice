import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui'
import incre from './incre'
import users from './users'
import typeCopy from './typeCopy'
const reducers = combineReducers({
    counter, ui, incre, users, typeCopy
});

export default reducers;
