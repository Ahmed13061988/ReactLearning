import React from "react"
import Child from './child'


export default class Parent extends React.Component{
    

    state = {
        names = [{
            id: 1, 
            name: "Kyle"

        }, 
        {
            id:2, 
            name: "Ahmed"
        }, 
        {
            id:3, 
            name: "Mereym"
        }
        
        ]

    }
   

    render(){
        
        return(
            <>
            
          <h1>{this.props.id}</h1>
          <Child employee = {this.state.names} /> 
            </>
        )
    }

}