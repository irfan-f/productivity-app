import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './stylesheets/NoteItem.css';

class NoteItem extends Component {
  toggle = (e) => {
    this.props.update(this.props.note);
  }
  render() { 
    const { note } = this.props;
    return (
      <div className="row" onClick = {this.toggle}>
        <div className="col ok">
          <div className="card" >
            <h4 className="card-title">Note</h4>
            <div className={"card-body" + (note.complete ? " completed" : "")} >
              <ReactMarkdown source={note.text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default NoteItem;