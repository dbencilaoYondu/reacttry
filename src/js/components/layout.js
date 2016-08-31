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
                        menus={[{title:'Summary',path:'summary'},{title:'Client Book',path:'clientbook'}]}
                        dropdownTitle="Forms" 
                        dropdownMenu={[{title:'Create',path:'createform'},{title:'View',path:'viewform'}]} />
                <div className="container">  
                    {this.props.children}
                    {this.testFunction()}
                </div>
            </div>
        
            );
    }
}