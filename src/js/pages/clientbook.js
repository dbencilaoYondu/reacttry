import React from 'react';
import ClientList from '../containers/clientsList'

export default class ClientBook extends React.Component{
    
    render(){
        return (
            <div>
                <h1>Client Book</h1>
                <ClientList />
            </div>  
            );
    }
}
