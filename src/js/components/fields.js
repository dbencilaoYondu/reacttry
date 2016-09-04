import React from 'react'

export default class Field extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            {this.props.fields.map(function(item,index){return <input type="text" key={index} placeholder={item} name={item}/>})}
            </div>
        )
    }
}