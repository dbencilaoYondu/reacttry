import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl,Modal,Button, ControlLabel, Checkbox } from 'react-bootstrap';
import Field from '../components/fields';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addField} from '../actions/addField'


class CreateForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            fieldType:'short text box',
            fieldName:'',
            fields:[]
        }
        console.log(this.state  )
        console.log(this.props) 
    }
   
    changeSelect(event){
        this.setState({fieldType:event.target.value})
        console.log(event.target.value);
    }
    inputName(event){
        this.setState({fieldName:event.target.value})
        console.log(event.target.value)
    }
    addElement(e){ 
        e.preventDefault()
        //  let fields = this.state.fields.slice();
        // console.log(this.state.fieldType)
        // fields.push({
        //     fieldType:this.state.fieldType,
        //     fieldName:this.state.fieldName
        // })
        //console.log(fields)
        this.setState({fields:this.state.fields.concat({
                fieldType:this.state.fieldType,
                fieldName:this.state.fieldName
            })
        })

            console.log(this.state)
            console.log(this.props)
    }
    showFormElements(){
        return this.state.fields.map(function(field,index){

           switch(field.fieldType){
               case 'short text box':
                  return  <FormGroup key={index}>
                        <ControlLabel>{field.fieldName}</ControlLabel>
                        <FormControl type="text"/>
                  </FormGroup>
               break;
               case 'long text box':
                  return <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>{field.fieldName}</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                </FormGroup>
               break;
               case 'selection':
                  return  <FormGroup controlId="formControlsSelect">
                        <ControlLabel>{field.fieldName}</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
               break;
               case 'checkbox':
                  return   <FormGroup>
                        <Checkbox inline>
                            1
                        </Checkbox>
                        {' '}
                        <Checkbox inline>
                            2
                        </Checkbox>
                        {' '}
                        <Checkbox inline>
                            3
                        </Checkbox>
                    </FormGroup>
                break;
                case 'product list':
                  return  <div>
                        products here
                    </div>
                break;
                case 'static text':
                  return  <div>
                        static text here
                    </div>
                break;
           }
        })
    }
    render(){
           
        return (
            <div className="createForm row">
                <div className="left createForm col-sm-4">
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
                                onChange={this.inputName.bind(this)}
                                placeholder="Enter text"
                            />
                        </FormGroup>
                        <button class="btn" type="submit">add field</button>
                    </form>
                </div>
                <div className="right viewForm col-sm-6 col-sm-offset-1">
                {this.state.fields.length > 0 ? this.showFormElements() : <h4 class="text-center addFieldHere">Add fields here...</h4>}
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
        clients:state.clients,
        fields:state.addField
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(CreateForm)