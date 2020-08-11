import React, { Component } from 'react';
import NoteItem from './NoteItem';

class NotesList extends Component {
  
  render() {
    const { notes } = this.props;
    return ( 
      <div className="container">
          {
            notes.map((_note, _index) => {
              return(
                <NoteItem key={_index} note={_note} update={this.updateTodo}>
                </NoteItem>
              )
            })
          }
        </div>
     );
  }

  updateTodo = (note) => {
    this.props.update(note);
  }
}
 
export default NotesList;