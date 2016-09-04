import {combineReducers} from 'redux';
import Clients from './clients'

const allReducers = combineReducers({
    clients: Clients
});

export default allReducers