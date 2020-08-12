import React, { Component } from 'react';
import CreateNote from './CreateNote';
import NotesList from './NotesList';

import './stylesheets/Layout.css'

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      count: 0,
    };
  };

  componentDidMount = () => {
    const notes = localStorage.getItem('notes');
    const count = localStorage.getItem('count');
    if(notes) {
      const doNotes = JSON.parse(notes);
      const doCount = JSON.parse(count);
      this.setState({notes: [...doNotes], count: doCount});
    }
    
  }

  appendNote = async (note) => {
    await this.setState({ notes: [{text: note.text, title: note.title, dateTo: note.dateTo, dateFrom: note.dateFrom, complete: false}, ...this.state.notes], count: this.state.count + 1 });
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
    localStorage.setItem('count', parseInt(JSON.stringify(this.state.count)));
  }

  updateNote = async (note) => {
    const newNotes = this.state.notes.map(_note => {
      if(note === _note) {
        return {
          text: note.text,
          title: note.title,
          dateTo: note.dateTo,
          dateFrom: note.dateFrom,
          complete: !note.complete
        }
      } else {
        return _note
      }
    });
    await this.setState({notes: newNotes});
    localStorage.setItem('notes', JSON.stringify(this.state.notes))
  }

  removeItem = async (note) => {
    const newNotes = this.state.notes.filter((x) => x.text !== note.text);
    await this.setState({notes: newNotes, count: this.state.count - 1});
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
    localStorage.setItem('count', JSON.stringify(this.state.count));
  }

  clearList = () => {
    localStorage.clear();
    this.setState({notes: [], count: 0})
  }

  render() {
    return (
      <div className="container" id="wrapper2">
        <div className="row">
          <div className="col-3">
            <h3>You have <span className="badge badge-info"><big>{this.state.count}</big></span> notes</h3>
          </div>
          <div className="col-8">
            <CreateNote append={this.appendNote}></CreateNote>
          </div>
          <div className="col-1">
            <span className="float-right"><button type="button" id="clearButton" onClick={this.clearList}>Clear list</button></span>
          </div>
        </div>
        <NotesList notes={this.state.notes} update={this.updateNote} removeItem={this.removeItem}></NotesList>
      </div>
    );
  }
}

export default Notes;