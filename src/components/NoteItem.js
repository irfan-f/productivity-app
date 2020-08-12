import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";

import './stylesheets/Layout.css';

class NoteItem extends Component {
  toggle = (e) => {
    if(e.target.id !== 'removeButton') {
      this.props.update(this.props.note);
    } else {
      this.removeItem(this.props.note);
    }
    
  }
  removeItem = (e) => {
    this.props.removeItem(this.props.note);
  }
  
  render() { 
    const { note } = this.props;
    return (
      <div className="row" >
        <div className="col ok">
          <div className={"card" + (note.complete ? " completed" : "")} onClick = {this.toggle} >
            <h4 className="card-title">Note <span className="float-right remove"><button type="button" id="removeButton" onClick={this.removeItem}>X</button></span></h4>
            <div className={"card-body" + (note.complete ? " completed" : "")}>
              
              <ReactMarkdown source={note.text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default NoteItem;