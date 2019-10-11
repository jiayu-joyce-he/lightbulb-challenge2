import React, { Component } from 'react';
import Button from './Button.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        boxNumber : 1 
      }
  }
  
  userInput = (e) => {
    e.preventDefault();
    let numStr = e.target.value.replace(/\D/,'') === '' ? "0": e.target.value.replace(/\D/,'');
    this.setState({boxNumber: parseInt(numStr)})
  }
  
  
  
  render() {
    //let colors = ["white", "green", "blue", "yellow", "red", "purple", "orange"]
    let array = new Array(this.state.boxNumber);
    return (
      <div className="App">
        <form className="info" onSubmit={this.changeNumber}>
          <label htmlFor="input-phrase">Input desired number of boxes {console.log(this.state.boxNumber)} {console.log(array)}</label>
          <input name="input-number" onChange={this.userInput}></input>
          <input className="button" type="submit" value="Submit" 
          onClick={this.changeNumber}/>
        </form>
        
          
      </div>
    );
  }
}

export default App;