import React from 'react';
import {Modal,Button} from 'react-bootstrap';


export default class AddFields extends React.Component{
    hide(){
        this.setState({showModal:false});
    }
    render(){
        return (
            <div className="static-modal" show={this.state.showModal} >
                <Modal.Dialog >
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        One fine body...
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}; 