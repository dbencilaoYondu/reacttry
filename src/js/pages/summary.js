import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button} from 'react-bootstrap';

export default class Summary extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
        
    }

    render(){
           
        return (
            <div>
                <h1>Summary</h1>
            </div>
            );
    }
}
