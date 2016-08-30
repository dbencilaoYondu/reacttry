import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button} from 'react-bootstrap';
import {AddFields} from '../components/addFields';

export default class CreateForm extends React.Component{
    
    constructor(){
        super();
    }

    openAddFieldsModal(e){
        e.preventDefault();
       // console.log(<AddFields />);
      //  return (<AddFields />);
        
    }

    render(){
        return (
            <div className="createForm">
                <form>
                    <h1>Create Form</h1>
                    <FormGroup>
                        <FormControl type="text" placeholder="Form title" />
                    </FormGroup>
                    <button class="btn btn-default" onClick={this.openAddFieldsModal.bind(this)}>Add Field</button>
                </form>
                <div id="addfieldsModal"></div>
            </div>
            );
    }
}
