/**
 * Created by gtsotsos on 2017-07-26.
 */
import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import {loadState} from '../localStorage'

const persistedState = loadState();

export default function configureStore(initialState) {
    const middlewares = [
        thunkMiddleware,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, persistedState, composeEnhancers(
        applyMiddleware(...middlewares),
    ));

}