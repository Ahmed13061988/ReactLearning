import React from "react"
import Child from './child'


export default class Parent extends React.Component{

    render(){
        return(
            <>
            
   <h1>{this.props.id}</h1>
            </>
        )
    }

}