import React, { Component } from 'react';
import './App.css';

import SearchList from './SearchList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Next Stop</a>
          </nav>
        </header>
        <div className="container-fluid">
          <div className="row no-gutters">
            <SearchList/>
            <div class="col-md-9">
              <div id="map"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
