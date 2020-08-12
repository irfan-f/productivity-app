import React, { Component } from 'react';

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      note: ''
    }
  }


  updateInput = (e) => {
    this.setState({ note: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    if(document.getElementById('create').value !== '') {
      this.props.append(this.state.note);
      document.getElementById('create').value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitForm(e)}>
          <input id='create' onChange={(e) => this.updateInput(e)} type='text'></input>
          <button type='submit' id="createButton">Create</button>
        </form>
      </div>
    );
  }
}


export default CreateNote;