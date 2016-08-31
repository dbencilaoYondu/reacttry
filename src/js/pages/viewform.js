import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button} from 'react-bootstrap';
import AddFields from '../components/addFields';

export default class ViewForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
        
    }

    render(){
           
        return (
            <div>
                <h1>View Form</h1>
            </div>
            );
    }
}
