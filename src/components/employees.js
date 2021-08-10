 import React from "react"


export default class Employees extends React.Component{

    state = {  
        counter: 0
    }

    incremnet = () => {
        this.setState({ // <<- this keyword not recognised ny old JS 
            counter: this.state.counter +1 
        })
    }

    discrement = () => {
        this.setState({
            counter: this.state.counter -1
        })

    }


     render(){
         return(
             <>
             <h2>Hello from Employees component</h2>
             <button onClick = {this.incremnet}>+</button>
             <h1>{this.state.counter}</h1>
             <button onClick ={this.discrement}>-</button>
             <h1>{this.props.name}</h1>
             </>
         )
     }

}