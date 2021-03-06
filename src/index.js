import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import {saveState} from './localStorage';
// import throttle from 'lodash/throttle';

const store = configureStore();

//if you want to throttle expensive state save
// store.subscribe(throttle(() => {
//     saveState(store.getState())
// }, 1000));

store.subscribe(() => {
    saveState(store.getState())
});

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>, document.getElementById('root')
);