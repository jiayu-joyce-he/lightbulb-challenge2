import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props)
      this.state = {
        colorIndex: 0
      }
  }
  
  handleChange = () => {
    let newIndex = (this.state.colorIndex)%7 + 1
    if (newIndex % 7 === 0){
      newIndex = 0
    }
    this.setState({colorIndex: newIndex})
  }
    render(){
        let colors = ["white", "green", "blue", "yellow", "red", "purple", "orange"]

        return (
              <button onClick = {this.handleChange} style= {{backgroundColor:colors[this.state.colorIndex]}} >{colors[this.state.colorIndex]}</button>)
    }
}

export default Button