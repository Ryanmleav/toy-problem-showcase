import React, { Component } from "react";
class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
  handleUserInput(e) {
    this.setState({ userInput: e })
  }
  assignEvenAndOdds(userInput) {
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt (arr[i], 10) );
      }
    }
    this.setState({evenArray: evens, oddArray: odds })
 }
  render() {
    return (
      <div className='puzzleBox evenAndOddPB' >
        <h4>Even and Odds </h4>
        <input value={this.state.unserInput} onChange={(e) => this.handleUserInput(e.target.value)} className='inputLine' />
        <button className='confirmationButton' onClick={() => { this.assignEvenAndOdds(this.state.userInput) }} > Split </button>
        <span className='resultsBox'> Evens: {this.state.evenArray}</span>
        <span className='resultsBox'> Odds: {this.state.oddArray}</span>
      </div>
    )
  }
}

export default EvenAndOdd;