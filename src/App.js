import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import * as FourSquareAPI from './FourSquareAPI';
import './App.css';

import MapView from './MapView';
import SearchList from './SearchList';


class App extends Component {
  state = {
    query: '',
    places: [],
    selectedPlace: ''
  }

  componentDidMount() {
    FourSquareAPI.search('NYC', 'Pizza').then(places => {
      this.setState({ places });
    });
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }

  updatePlace = (place) => {
    this.setState({selectedPlace: place});
  }

  render() {
    const { query, places } = this.state;
    let filteredPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filteredPlaces = places
        .filter(place => match.test(place.name));
    } else {
      filteredPlaces = places;
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <a className="navbar-brand" href="/">Next Stop</a>
          </nav>
        </header>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-md-3">
              <SearchList
                query={this.updateQuery}
                places={filteredPlaces}
                selectPlace={this.updatePlace}/>
            </div>
            <div className="col-md-9">
              <MapView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
