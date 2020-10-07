import React, { Component } from 'react';
import './stylesheets/Layout.css'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <h1 id="header">Productivity <small>An organizer for tasks</small></h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;