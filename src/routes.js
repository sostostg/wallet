/**
 * Created by gtsotsos on 2017-07-26.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './containers/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
    </Route>
);
