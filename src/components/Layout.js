import React, { Component } from 'react';
import Header from './Header';
import Notes from './Notes';

import './stylesheets/Layout.css'

class Layout extends Component {
  state = {}
  render() {
    return (
      <div className="container-fluid" id="wrapper">
        <div className="row head">
          <Header />
        </div>
        <Notes />
      </div>
    );
  }
}

export default Layout;