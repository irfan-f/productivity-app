import React, { Component } from 'react';
import NoteItem from './NoteItem';

import './stylesheets/Layout.css'

class NotesList extends Component {

  render() {
    const { notes } = this.props;
    return (
      <div className="container" id="list">
        {
          notes.map((_note, _index) => {
            return (
              <NoteItem tag='note' key={_index} note={_note} update={this.updateNote} removeItem={this.removeItem}>
              </NoteItem>
            )
          })
        }
      </div>
    );
  }

  removeItem = (note) => {
    this.props.removeItem(note);
  }

  updateNote = (note) => {
    this.props.update(note);
  }
}

export default NotesList;