import React, { Component } from 'react';

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      note: {
        text: '',
        title: '',
        dateTo: '',
        dateFrom: ''
      }
    }
  }


  updateText = (e) => {
    this.setState({ note: { text: e.target.value, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: this.state.note.title, id: this.props.keyProp } });
  }

  updateTitle = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: this.state.note.dateFrom, title: e.target.value, id: this.props.keyProp } });
  }

  updateDateTo = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: e.target.value, dateFrom: this.state.note.dateFrom, title: this.state.note.title, id: this.props.keyProp } });
  }

  updateDateFrom = (e) => {
    this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: e.target.value, title: this.state.note.title, id: this.props.keyProp } });
  }

  submitForm = (e) => {
    e.preventDefault();
    if (document.getElementById('create').value !== '') {
      this.setState({ note: { text: this.state.note.text, dateTo: this.state.note.dateTo, dateFrom: e.target.value, title: this.state.note.title, id: this.props.keyProp } });
      this.props.append(this.state.note);
      document.getElementById('create').value = '';
      document.getElementById('title').value = '';
      document.getElementById('dateTo').value = '';
      document.getElementById('dateFrom').value = '';
      this.setState({
        note: {
          text: '',
          title: '',
          dateTo: '',
          dateFrom: '',
          id: '',
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
          <button type='submit' id='createButton' tabIndex='-1'>Create</button>
          <div className='collapse' id='collapseOptions'>
            <input id='title' placeholder='Title' type='text' onChange={(e) => this.updateTitle(e)}></input>
            <div className='colors'>
              <label htmlFor='cars'>Color:</label>
              <select name='cars' id='cars'>
                <option value='volvo'>Default</option>
                <option value='saab'>Red</option>
                <option value='mercedes'>Orange</option>
                <option value='audi'>Yellow</option>
                <option value='audi'>Blue</option>
              </select>
            </div>
            <input id='dateFrom' placeholder='Date: from' type='text' onChange={(e) => this.updateDateFrom(e)}></input>
            <input id='dateTo' placeholder='Date: to' type='text' onChange={(e) => this.updateDateTo(e)}></input>
            <br />
          </div>
        </form>
      </div>
    );
  }
}


export default CreateNote;