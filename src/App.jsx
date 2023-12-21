import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super()
    this.props = props
  }
  
  render() {
    return (
      <div>
        <h1 style={{ color:'blue' }}>React on Mobile Phone</h1>
        <h3>This is a Class (OOP) JSX constructor</h3>
        <p style={{ color:'green' }}>This tutorial shows us our to run React on a mobile phone without Terminal or Node</p>
        <p>Welcome {this.props.name}</p>
      </div>
    )
  }
}
export default App