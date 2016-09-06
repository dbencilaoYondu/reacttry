import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showActive} from '../actions/showActive'
import {addField} from '../actions/addField'

class ClientList extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    showListOfClients(x){
        console.log(this.props)
        return this.props.clients.map((client)=>{
            return <tr key={client.id}>
                    <td onClick={() =>this.props.showActive(client.name)}>{client.name}</td>
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
                    {this.showListOfClients(this.props)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state){
    return {
        clients:state.clients,
        activeClient:state.activeClient
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addField:addField,
        showActive:showActive
    },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientList);