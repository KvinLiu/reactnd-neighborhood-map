import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class SearchList extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }

  render() {
    const { places } = this.props;
    const { query } = this.state;
    let filteredPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filteredPlaces = places
        .filter(place => match.test(place.name));
    } else {
      filteredPlaces = places;
    }
    return (
      <div className="col-md-3">
        <div className="container">
          <hr/>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Filter"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
            <span className="input-group-addon">
              <i className="fas fa-filter"></i>
            </span>
          </div>
          <hr/>
          <div style={{maxHeight: '82vh',overflow: 'scroll'}}>
            <ul className="list-group">
              {filteredPlaces.map(place => (
                <li
                  key={place.id}
                  className="list-group-item list-group-item-action">
                  <span>{place.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchList;
