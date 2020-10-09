import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faEdit, faTimes, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

import './stylesheets/Layout.css';

class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      edit: false,
      complete: this.props.note.complete
    }
  }

  updateText = (e) => {
    this.setState({ note: { text: e.target.value, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.state.note.id, color: this.state.note.color, complete: this.state.note.complete } });
  }

  updateTitle = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: e.target.value, id: this.state.note.id, color: this.state.note.color, complete: this.state.note.complete } });
  }

  updateDateTo = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: e.target.value, dateFrom: this.state.note.dateFrom, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.state.note.id, color: this.state.note.color, complete: this.state.note.complete } });
  }

  updateDateFrom = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: e.target.value, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.state.note.id, color: this.state.note.color, complete: this.state.note.complete } });
  }

  updateColor = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.state.note.id, color: e.target.value, complete: this.state.note.complete } });
  }

  toggle = (e) => {
    if (e.target.id === 'removeButton') {
      this.removeItem(this.props.note);
    } else if (e.target.id === 'completeIt' || e.target.id === 'completeButton' || e.target.id === 'completeUn' || e.target.parentNode.id === 'completeIt' || e.target.parentNode.id === 'completeUn') {
      this.setState({ complete: !this.state.complete})
      this.props.update(this.props.note);
    } else {
    }

  }
  removeItem = (e) => {
    e.stopPropagation();
    this.props.removeItem(this.props.note);
  }

  editNote = async (e) => {
    this.setState({
      edit: !this.state.edit,
    });
    let select = await document.getElementById('colorsEditSelect')
    select.value = this.state.note.color;
  }

  submitEdit = (e) => {
    e.preventDefault();
    this.props.edit(this.state.note);
    this.setState({
      edit: !this.state.edit,
    })
  }

  render() {
    const { note } = this.props;
    return (
      <div className='row'>
        <div className='col ok'>
          <div className={'card' + (note.complete ? ' completed' : '')} style={{ backgroundColor: (note.color !== 'grey' ? note.color : 'gainsboro') }}>
            <div className='card-title'>
              <span className='remove' hidden={this.state.edit}>
                <button type='button' id='removeButton' onClick={this.removeItem}><FontAwesomeIcon icon={faEraser} /></button>
              </span>
              {(this.state.edit) ? <input id='titleEdit' defaultValue={this.state.note.title} type='text' onChange={(e) => this.updateTitle(e)}></input> : <div id='title'>{note.title}</div>}
              <span id='dates' hidden={this.state.edit}>
                {(note.dateFrom !== '') ? note.dateFrom + '\n' : <br />}{note.dateTo !== '' ? note.dateTo : ''}
              </span>
              <button type='button' id='editButton' onClick={this.editNote}><FontAwesomeIcon icon={faEdit} hidden={this.state.edit} /><FontAwesomeIcon icon={faTimes} hidden={!this.state.edit} /></button>
            </div>
            <span id='datesEdit' hidden={!this.state.edit}>
              {<input id='dateFromEdit' defaultValue={this.state.note.dateFrom} type='date' onChange={(e) => this.updateDateFrom(e)} hidden={!this.state.edit}></input>}{<input type='date' id='dateToEdit' defaultValue={this.state.note.dateTo} onChange={(e) => this.updateDateTo(e)} hidden={!this.state.edit}></input>}
            </span>
            <div className={'card-body' + (note.complete ? ' completed' : '')}>
              <textarea id='noteEdit' rows='2' defaultValue={this.state.note.text} onChange={(e) => this.updateText(e)} type='text' hidden={!this.state.edit}></textarea>
              <div className='colorsEdit' hidden={!this.state.edit}>
                <label htmlFor='colorsEdit'>Color:</label>
                <select name='colorsEdit' id='colorsEditSelect' onChange={this.updateColor}>
                  <option value='grey'>Grey</option>
                  <option value='red'>Red</option>
                  <option value='orange'>Orange</option>
                  <option value='yellow'>Yellow</option>
                  <option value='blue'>Blue</option>
                </select>
                <button type='button' id='editCompleteButton' tabIndex='-1' hidden={!this.state.edit}><FontAwesomeIcon icon={faPencilAlt} onClick={this.submitEdit} /></button>
              </div>
              <div id='note' hidden={this.state.edit}>
                <ReactMarkdown source={note.text} />
              </div>
              <button type='button' id='completeButton' onClick={(e) => this.toggle(e)} tabIndex='0' hidden={!this.state.edit ? !this.state.complete ? false : true : true}><FontAwesomeIcon id='completeIt' icon={faCheck} /></button>
              <button type='button' id='completeButton' onClick={(e) => this.toggle(e)} tabIndex='0' hidden={!this.state.edit ? !this.state.complete ? true : false : true }><FontAwesomeIcon id='completeUn' icon={faTimes} /> </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteItem;