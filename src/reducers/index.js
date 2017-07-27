import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import bankingReducer from './walletReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    account: bankingReducer
});

export default rootReducer;