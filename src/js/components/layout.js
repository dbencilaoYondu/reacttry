import React from 'react';
import Header from './header.js';
import { RouteHandler } from 'react-router';

export default class Layout extends React.Component{
    
    constructor(){
        super();
        this.state = {};
    }
    testFunction(){
        console.log(this.props)
    }
    render(){
        return (
            <div className="layout container">
                <Header title="Form" 
                        menus={[{title:'Create Form',path:'createform'},{title:'Client Book',path:'clientbook'}]}
                        dropdownTitle="Portal" 
                        dropdownMenu={['About','Terms']} />
                <div className="container">  
                    {this.props.children}
                    {this.testFunction()}
                </div>
            </div>
        
            );
    }
}