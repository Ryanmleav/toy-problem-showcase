import React, { Component } from 'react';
export default class FilterObjects extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [{
        name: 'Randy Orton',
        age: 37,
        finisher: 'RKO'
      },
      {
        name: 'Geralt',
        age: 300,
        lover: "yen"
      },
      {
        name: 'coby',
        age: 9,
        finisher: 'Blackout'
      }
      ],
      userInput: '',
      filteredFavorites: [],
    }
  }
  handleUserInput(val) {
    this.setState({ userInput: val });
  }
  filterFavorites(key) {
    let favorites = this.state.favorites;
    let filteredFavorites = [];

    filteredFavorites = favorites.filter(e => !e[key])

    this.setState({ filteredFavorites: filteredFavorites });
  }



  render() {
    return (
      <div className='puzzleBox filterObjectPb'>
        <h4>Filter Object</h4>
        <span className='puzzletext'> unFlitered:{JSON.stringify(this.state.favorites)}</span>
        <input className='inputLine' onChange={(e) => this.handleUserInput(e.target.value)}></input>
        <button className='confirmationButton' onClick={() => this.filterFavorites(this.state.userInput)}> Filter </button>
        <span className='resultsBox filterObjectRB'>filtered:{JSON.stringify(this.state.filteredFavorites)}</span>
      </div>
    )
  }
}
