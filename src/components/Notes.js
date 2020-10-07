import React, { Component } from 'react';
import CreateNote from './CreateNote';
import NotesList from './NotesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'

import './stylesheets/Layout.css'

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      count: 0,
      filter: ''
    };
  };

  componentDidMount = () => {
    const notes = localStorage.getItem('notes');
    const count = localStorage.getItem('count');
    if (notes) {
      const doNotes = JSON.parse(notes);
      const doCount = JSON.parse(count);
      this.setState({ notes: [...doNotes], count: doCount, filter: this.state.filter });
    }

  }

  appendNote = async (note) => {
    this.setState({ notes: [{ text: note.text, title: note.title, dateTo: note.dateTo, dateFrom: note.dateFrom, complete: false, id: note.id, color: note.color }, ...this.state.notes], count: this.state.count + 1, filter: this.state.filter }, () => {
      localStorage.setItem('notes', JSON.stringify(this.state.notes));
      localStorage.setItem('count', parseInt(JSON.stringify(this.state.count)));
    });
  }

  updateNote = async (note) => {
    const newNotes = this.state.notes.map(_note => {
      if (note === _note) {
        return {
          text: note.text,
          title: note.title,
          dateTo: note.dateTo,
          dateFrom: note.dateFrom,
          complete: !note.complete,
          id: note.id,
          color: note.color
        }
      } else {
        return _note
      }
    });
    this.setState({ notes: newNotes, count: this.state.count, filter: this.state.filter }, () => {
      localStorage.setItem('notes', JSON.stringify(this.state.notes));
    });
  }

  updateIndexing = async (notes) => {
    let newNotes = notes.reverse().map((_note, _index) => {
      _note.id = _index;
      return _note;
    });
    newNotes.reverse();
    this.setState({ notes: newNotes, count: this.state.count - 1, filter: this.state.filter }, () => {
      localStorage.setItem('notes', JSON.stringify(this.state.notes));
      localStorage.setItem('count', JSON.stringify(this.state.count));
    });
  }

  removeItem = async (note) => {
    const newNotes = this.state.notes.filter((x) => x.id !== note.id);
    this.updateIndexing(newNotes);
  }

  clearList = () => {
    localStorage.clear();
    this.setState({ notes: [], count: 0, filter: '' })
  }

  render() {
    return (
      <div className='container' id='wrapper2'>
        <div className='row'>
          <div className='col-3'>
            <h3>You have <span className='badge badge-info'><big>{this.state.count}</big></span> notes</h3>
          </div>
          <div className='col-7'>
            <CreateNote append={this.appendNote} keyProp={this.state.count}></CreateNote>
          </div>
          <div className='col-2'>
            
          </div>
        </div>
        <div className='row' id='funcs'>
          <div className='col-4' id='funcsLeft'>
            <span className='float-left'><button type='button' id='clearButton' onClick={this.clearList}><FontAwesomeIcon icon={faTrash} /></button></span>
          </div>
          <div className='col-8' id='funcsRight'>
            <form className='float-right' id='searchForm'> 
              <input onChange={(e) => {  }} id='search' type='text' placeholder='Search'></input>
              <div className='filterOn'>
              <label htmlFor='filterBy'>by</label>
                <select name='filterBy' id='searchs'>
                  <option value='title'>Title</option>
                  <option value='note'>Note</option>
                  <option value='dateFrom'>From</option>
                  <option value='dateTo'>To</option>
                  <option value='color'>Color</option>
                </select>
              </div>
              <button type='submit' id='searchButton'><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </div>
        </div>
        <NotesList notes={this.state.notes} update={this.updateNote} removeItem={this.removeItem}></NotesList>
      </div>
    );
  }
}

export default Notes;