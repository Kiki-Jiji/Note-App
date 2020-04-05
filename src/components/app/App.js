import React from 'react';
import './App.css';

import Table from '../table/Table.js'
import Form from '../Form/Form.js'

class App extends React.Component {
  constructor(props){
  super(props)
  this.removeNote = this.removeNote.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  this.state =  {
    notes: []
  }
  }

  handleSubmit = note => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  removeNote = index => {
      const {notes} = this.state;

      this.setState({
        notes: notes.filter((character, i) => {
          return i !== index
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Table character={this.state} removeNote={this.removeNote}/>
        <Form handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

export default App
