import React from 'react';
import {Modal,Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';


export default class AddFields extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:1
        }
    }
    onHide(){
        this.props.close();
    }
    changeSelect(event){
        this.setState({value:event.target.value})
        console.log(event.target.value);
    }
    render(){

        const selectionFormat = () => {
            <div>
                <input type="text" placeholder="selection title"/>
                <button>Add more options</button>
            </div>
            
        }

        return (
            <div className="static-modal" >
                <Modal.Dialog backdrop="true"> 
                    <Modal.Header>
                        <Modal.Title>Add a field</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select Fields</ControlLabel>
                            <FormControl componentClass="select" onChange={this.changeSelect.bind(this)} placeholder="select">
                                <option value="1">short text box</option>
                                <option value="2">long text box</option>
                                <option value="3">selection</option>
                                <option value="4">checkbox</option>
                                <option value="5">product list</option>
                                <option value="6">static text</option>
                            </FormControl>
                        </FormGroup> 
                        {this.state.value == 1 ? <input type="text" name="" placeholder="type text box label here" /> : null}
                        {this.state.value == 2 ? <textarea name="" placeholder="type text box label here" /> : null}
                        {this.state.value == 3 ? selectionFormat : null}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.onHide.bind(this)}>Close</Button>
                        <Button bsStyle="primary">add</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}; 