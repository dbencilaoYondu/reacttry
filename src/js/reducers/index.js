import {combineReducers} from 'redux';
import Clients from './clients'
import ActiveClient from './activeClient'
import AddField from './addField'
 
const allReducers = combineReducers({
    clients: Clients,
    activeClient:ActiveClient,
    addField:AddField
});

export default allReducers