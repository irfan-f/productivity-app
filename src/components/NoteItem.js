import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser} from '@fortawesome/free-solid-svg-icons'

import './stylesheets/Layout.css';

class NoteItem extends Component {
  toggle = (e) => {
    if (e.target.id !== 'removeButton') {
      this.props.update(this.props.note);
    } else {
      this.removeItem(this.props.note);
    }

  }
  removeItem = (e) => {
    e.stopPropagation();
    this.props.removeItem(this.props.note);
  }

  render() {
    const { note } = this.props;
    return (
      <div className='row'>
        <div className='col ok'>
          <div className={'card' + (note.complete ? ' completed' : '')} style={{backgroundColor: (note.color !== 'default' ? note.color : 'gainsboro')}} onClick={this.toggle}  >
            <h4 className='card-title'><span className='remove'><button type='button' id='removeButton' onClick={this.removeItem}><FontAwesomeIcon icon={faEraser} /></button></span>{note.title}<span id='dates'>{note.dateFrom !== '' ? 'From: ' + note.dateFrom + '\n' : ''}{note.dateTo !== '' ? 'To: ' + note.dateTo : ''}</span></h4>
            <div className={'card-body' + (note.complete ? ' completed' : '')}>
              <ReactMarkdown source={note.text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteItem;