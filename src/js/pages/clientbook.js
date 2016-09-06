import React from 'react';
import ClientList from '../containers/clientsList'



class ClientBook extends React.Component{
    
    render(){
        return (
            <div>
                <h1>Client Book</h1>
                <ClientList />
            </div>  
            );
    }
}

export default ClientBook
