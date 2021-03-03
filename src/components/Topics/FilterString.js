import React, { Component } from 'react';
export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      family: ['coby', 'mya', 'ellie', 'brandi', 'ryan'],
      userInput: '',
      filteredFamily: []
    };
  }
  handleUserInput(val) {
    this.setState({ userInput: val });
  }
  filterFamily(userInput){
    let family = this.state.family;
    let filteredFamily = [];
    
    for (let i=0; i < family.length; i++){
      if (family[i].includes(userInput)){
        filteredFamily.push(family[i])
      }
    }
    this.setState({filteredFamily: filteredFamily});
  }
  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4> Filter String </h4>
        <span className='puzzleText'> Family: {this.state.family}</span>
        <input className='inputLine' onChange={(e) => this.handleUserInput(e.target.value)}></input>
        <button className='confiramtionButton' onClick={() => this.filterFamily(this.state.userInput)}> Filter </button>
        <span className='resultsBox filterStringRB'>Filtered Family: {this.state.filteredFamily}</span>
      </div>
    )
  }
}