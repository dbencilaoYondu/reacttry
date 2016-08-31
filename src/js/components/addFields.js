import React from 'react';
import {Modal,Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';


export default class AddFields extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:2
        }
    }
    onHide(){
        this.props.close();
    }
    changeSelect(){
        this.setState({value:event.target.value})
    }
    render(){
        return (
            <div className="static-modal" >
                <Modal.Dialog backdrop="true"> 
                    <Modal.Header>
                        <Modal.Title>Add a field</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select Fields</ControlLabel>
                            <FormControl componentClass="select" value={optionsState} onChange={this.changeSelect()} placeholder="select">
                                <option value="1">short text box</option>
                                <option value="2">long text box</option>
                                <option value="3">selection</option>
                                <option value="4">checkbox</option>
                                <option value="5">product list</option>
                                <option value="6">static text</option>
                            </FormControl>
                        </FormGroup>
                        {this.state.value == 1 ? <p>yey!</p> : null}
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