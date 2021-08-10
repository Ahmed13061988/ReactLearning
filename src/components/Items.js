import React, { Component } from "react"
import Employees from './employees'


export default class Items extends React.Component {


    state = {
        emp : "Kyle"
    }


    render(){
        return(
            <>
            <h1>Hello react</h1>
            <h1>Hello from Items component</h1>
            < Employees  name = {this.state.emp}/>
            </>
        )
    }

}

// export default Items; 