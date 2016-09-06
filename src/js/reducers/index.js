import {combineReducers} from 'redux';
import Clients from './clients'
import ActiveClient from './activeClient'

const allReducers = combineReducers({
    clients: Clients,
    activeClient:ActiveClient
});

export default allReducers