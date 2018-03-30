import React, { Component } from 'react';
import './App.css';

import SearchList from './SearchList';
import * as FourSquareAPI from './FourSquareAPI';

class App extends Component {
  state = {
    places: []
  }

  componentDidMount() {
    FourSquareAPI.search('NYC', 'Pizza').then(places => {
      this.setState({ places });
    });
  }

  render() {
    const { places } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <a className="navbar-brand" href="#">Next Stop</a>
          </nav>
        </header>
        <div className="container-fluid">
          <div className="row no-gutters">
            <SearchList places={ places }/>
            <div className="col-md-9">
              <div id="map"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
