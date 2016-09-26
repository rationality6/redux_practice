import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// import * as actions from './actions';

const store = createStore(reducers);

// console.log(JSON.stringify(store.getState(),null,4));

// store.subscribe(function(){
//     console.log(JSON.stringify(store.getState(),null,4))
// });
//
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200,200,200]));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
