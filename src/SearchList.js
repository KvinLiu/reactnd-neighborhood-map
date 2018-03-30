import React, { Component } from 'react';

class SearchList extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="container">
          <div className="input-group">
            <h5 className="text-muted">What's Your Interest?</h5>
          </div>
          <div className="input-group">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search for..."
              />
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Where..."
              />
            <button
              className="btn btn-secondary"
              type="button"
              >Go!</button>
          </div>
          <hr/>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Filter"
              />
            <span class="input-group-addon">
              <i class="fas fa-filter"></i>
            </span>
          </div>
          <hr/>
          <div style={{maxHeight: '72vh',overflow: 'scroll'}}>
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchList;
