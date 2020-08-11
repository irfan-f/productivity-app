import React, { Component } from 'react';
import './stylesheets/Header.css'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <h1 id="header">Productivity <small>A solution to organization</small></h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;