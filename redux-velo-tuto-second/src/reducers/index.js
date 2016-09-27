import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui'
import incre from './incre'

const reducers = combineReducers({
    counter, ui, incre
});

export default reducers;
