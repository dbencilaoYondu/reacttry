import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button} from 'react-bootstrap';
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
        this.setState({showModal:true})
        console.log(this.state);
      //  return (<AddFields />);
        
    }

    close(){
        this.state.showModal = false;
    }

    render(){
            let toggleModal = e => { this.setState({showModal : !this.state.showModal})}
        return (
            <div className="createForm">
                <h1>Create Form</h1>
                <form>
                    <FormGroup>
                        <FormControl type="text" placeholder="Form title" />
                    </FormGroup>
                     <Button  bsStyle="primary"
                        bsSize="large"
                        onClick={this.openAddFieldsModal.bind(this)}>Add a field
                    </Button>
                </form>
               
                { this.state.showModal ? <AddFields close={toggleModal}/> : null }
            </div>
            );
    }
}
