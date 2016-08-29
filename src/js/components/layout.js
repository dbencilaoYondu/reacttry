import React from 'react';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.testVal = 'test value eeee';
    }
    testFunction(){
        console.log(this);
    }
    render(){
        return (
            <div className="container">
                <h1>heyyy!!! wooo eeeee  o</h1>     
                <button onClick={this.testFunction}>click me</button>
            </div>
            
            
            );
    }
}