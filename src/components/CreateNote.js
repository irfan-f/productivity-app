import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      note: {
        text: '',
        title: '',
        dateTo: new Date().toISOString().split('T')[0],
        dateFrom: '',
        color: 'grey'
      }
    }
  }


  updateText = (e) => {
    this.setState({ note: { text: e.target.value, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.props.keyProp, color: this.state.note.color } });
  }

  updateTitle = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: e.target.value, id: this.props.keyProp, color: this.state.note.color } });
  }

  updateDateTo = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: e.target.value, dateFrom: this.state.note.dateFrom, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.props.keyProp, color: this.state.note.color } });
  }

  updateDateFrom = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: e.target.value, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.props.keyProp, color: this.state.note.color } });
  }

  updateColor = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: this.state.note.title === '' ? 'Note' : this.state.note.title, id: this.props.keyProp, color: e.target.value } });
  }

  submitForm = (e) => {
    e.preventDefault();
    let date = new Date().toISOString().split('T')[0];
    if (document.getElementById('create').value !== '') {
      this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: this.state.note.title, id: this.props.keyProp, color: this.state.note.color } });
      this.props.append(this.state.note);
      document.getElementById('create').value = '';
      document.getElementById('title').value = '';
      document.getElementById('dateTo').value = '';
      document.getElementById('dateFrom').value = date;
      document.getElementById('colors').option = this.state.color;
      this.setState({
        note: {
          text: '',
          title: '',
          dateTo: '',
          dateFrom: date,
          id: '',
          color: this.state.note.color
        }
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitForm(e)}>
          <textarea rows='2' id='create' placeholder='Note' onChange={(e) => this.updateText(e)} type='text'></textarea>
          <button type='button' id='optionsButton' data-toggle='collapse' data-target='#collapseOptions' aria-expanded='false' aria-controls='collapseOptions' tabIndex='-1'>
            <i className='arrowDown' tabIndex='-1' />
          </button>
          <button type='submit' id='createButton' tabIndex='-1'><FontAwesomeIcon icon={faPencilAlt} /></button>
          <div className='collapse' id='collapseOptions'>
            <input id='title' placeholder='Title' type='text' onChange={(e) => this.updateTitle(e)}></input>
            <div className='colors'>
              <label htmlFor='colors'>Color:</label>
              <select name='colors' id='colors' onChange={(e) => this.updateColor(e)}>
                <option value='grey'>Grey</option>
                <option value='red'>Red</option>
                <option value='orange'>Orange</option>
                <option value='yellow'>Yellow</option>
                <option value='blue'>Blue</option>
              </select>
            </div>
            <label htmlFor='dateFrom' id='dateFromLabel'>
              From: 
            </label>
            <label htmlFor='dateTo' id='dateToLabel'>
              To: 
            </label>
              <input id='dateFrom' defaultValue={new Date().toISOString().split('T')[0]} type='date' onChange={(e) => this.updateDateFrom(e)}></input>
            
              <input id='dateTo' type='date' onChange={(e) => this.updateDateTo(e)}></input>
            <br />
          </div>
        </form>
      </div>
    );
  }
}


export default CreateNote;