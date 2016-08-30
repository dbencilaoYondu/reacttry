import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button} from 'react-bootstrap';
import RU from 'react-utils-helper/lib';
import AddFields from '../components/addFields';

export default class CreateForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
        
    }

    openAddFieldsModal(e){
        e.preventDefault();
       // this.state.showModal = !this.state.showModal;
        
        console.log(this.state);
      //  return (<AddFields />);
        
    }

    close(){
        this.state.showModal = false;
    }

    render(){
        
        return (
            <div className="createForm">
                <form>
                    <h1>Create Form</h1>
                    <FormGroup>
                        <FormControl type="text" placeholder="Form title" />
                    </FormGroup>
                     <Button  bsStyle="primary"
                        bsSize="large"
                        onClick={this.openAddFieldsModal.bind(this)}>open modal
                    </Button>
                </form>
                //use react-utils here, to show and hide something
               
            </div>
            );
    }
}
