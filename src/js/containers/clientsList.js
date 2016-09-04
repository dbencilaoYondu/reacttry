import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class ClientList extends Component{

    showListOfClients(){
        return this.props.clients.map((client)=>{
            return <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.username}</td>
                    <td>{client.email}</td>
                   </tr>
        });
    }

    render(){
        return(
            <table>  
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    {this.showListOfClients()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state){
    return {
        clients:state.clients
    }
}

export default connect(mapStateToProps)(ClientList);