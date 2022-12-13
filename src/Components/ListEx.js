import React, { Component } from 'react'

export default class ListEx extends Component {
  render() {
    const cars = ["Nano ","800 ","Breeze ","Leo "] 

    const listcars=cars.map((i)=> i);
    console.log(listcars);
    return ( 
        <React.Fragment>
      <h1>{listcars}</h1> 
      <h1>FRONTEND</h1>
      </React.Fragment>
    )
  }
}

