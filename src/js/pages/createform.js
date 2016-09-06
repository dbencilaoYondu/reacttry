import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button, ControlLabel } from 'react-bootstrap';
import AddFields from '../components/addFields';
import Field from '../components/fields';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addField} from '../actions/addField'


class CreateForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            showModal:false,
            fieldType:'short text box',
            elements:[]
        }
        console.log(this.props)
    }

    changeSelect(event){
        this.setState({fieldType:event.target.value})
        console.log(event.target.value);
    }

    addElement(e){
        e.preventDefault()
        console.log(this.state.fieldType)
    }
    showFormElements(){

    }
    render(){
            let toggleModal = e => { this.setState({showModal : !this.state.showModal})}
        return (
            <div className="createForm row">
                <div className="left createForm col-sm-6">
                    <h1>Create Form</h1>
                    <form onSubmit={this.addElement.bind(this)}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select Field</ControlLabel>
                            <FormControl componentClass="select" onChange={this.changeSelect.bind(this)} placeholder="select">
                                <option>short text box</option>
                                <option>long text box</option>
                                <option>selection</option>
                                <option>checkbox</option>
                                <option>product list</option>
                                <option>static text</option>
                            </FormControl>
                        </FormGroup> 
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>Field Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.fieldName}
                                placeholder="Enter text"
                            />
                        </FormGroup>
                        <button class="btn" type="submit" onClick={() => this.props.addField()}>add field</button>
                    </form>
                </div>
                <div className="right viewForm col-sm-6">
                    form goes here...
                    {this.showFormElements()}
                </div>
                
            </div>
            );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addField:addField
    },dispatch)
}
function mapStateToProps(state){
    return {
        clients:state.clients
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(CreateForm)