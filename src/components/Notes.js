import React, { Component } from 'react';
import CreateNote from './CreateNote';
import NotesList from './NotesList';

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
    await this.setState({ notes: [...this.state.notes, {text: note, complete: false}], count: this.state.count + 1 });
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
    localStorage.setItem('count', parseInt(JSON.stringify(this.state.count)));
  }

  updateNote = async (note) => {
    const newNotes = this.state.notes.map(_note => {
      if(note === _note) {
        return {
          text: note.text,
          complete: !note.complete
        }
      } else {
        return _note
      }
    });
    await this.setState({notes: newNotes});
    localStorage.setItem('notes', JSON.stringify(this.state.notes))
  }
  
  checkMatching(note) {
    return 
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
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>You have <span className="badge badge-info"><big>{this.state.count}</big></span> notes</h2>
          </div>
          <div className="col-6">
            <CreateNote append={this.appendNote}></CreateNote>
          </div>
          <div className="col-2 d-right">
            <span className="float-right"><button type="button" onClick={this.clearList}>Clear list</button></span>
          </div>
        </div>
        <NotesList notes={this.state.notes} update={this.updateNote} removeItem={this.removeItem}></NotesList>
      </div>
    );
  }
}

export default Notes;