import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button} from 'react-bootstrap';
import AddFields from '../components/addFields';
import Field from '../components/fields';

export default class CreateForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            showModal:false,
            elements:[]
        }
        
    }

    openAddFieldsModal(e){
        e.preventDefault();
       // this.state.showModal = !this.state.showModal;
        this.setState({showModal:true})
        console.log(this.state);
      //  return (<AddFields />);
        
    }
    addElement(e){
        console.log(e)
        let elementArray = this.state.elements.slice();
        elementArray.push(e)
        this.setState({elements:elementArray})
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
                <hr/>
                <h2>Form goes here</h2>
                <form >
                    <Field fields={this.state.elements} />
                </form>
                { this.state.showModal ? <AddFields close={toggleModal} add={this.addElement}/> : null }
            </div>
            );
    }
}
