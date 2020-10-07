import React, { Component } from 'react';
import NoteItem from './NoteItem';

import './stylesheets/Layout.css'

class NotesList extends Component {
  componentDidUpdate() {
    this.notes = this.doFilter();
  }
  
  render() {
    return (
      <div className='container' id='list'>
        {this.props.filter === '' ? this.doDefault() : this.doFilter()}
      </div>
    );
  }

  doDefault = () => {
    const { notes } = this.props;
    return notes.map((_note, _index) => {
      return (
        <NoteItem tag='note' key={_index} note={_note} update={this.updateNote} removeItem={this.removeItem}>
        </NoteItem>
      )
      })
  }

  doFilter = () => {
    const { notes, filter, filterBy } = this.props;
      switch(filterBy) {
        case 'title': 
          return notes.map((_note, _index) => {
            if(_note.title.toLowerCase().includes(filter)) {
              return (
              <NoteItem tag='note' key={_index} note={_note} update={this.updateNote} removeItem={this.removeItem}>
              </NoteItem>
              )} else {return null};
          });
        default:
          return notes.map((_note, _index) => {
            if(_note.title.toLowerCase().includes(filter)) {
              return (
              <NoteItem tag='note' key={_index} note={_note} update={this.updateNote} removeItem={this.removeItem}>
              </NoteItem>
              )} else {return null};
          });
      }
    }

  removeItem = (note) => {
    this.props.removeItem(note);
  }

  updateNote = (note) => {
    this.props.update(note);
  }
}

export default NotesList;