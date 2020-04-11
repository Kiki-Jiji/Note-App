import React from 'react'

class Form extends React.Component {
  constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.submitForm = this.submitForm.bind(this)
        this.keyPressed = this.keyPressed.bind(this);
  }

  initialState = {
   name: '',
   job: '',
 }

 state = this.initialState


  handleChange = event => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState)
  }


  keyPressed(event) {
  if (event.key === "Enter") {
    this.submitForm()
  }
  }

  render() {
    const {name, job} = this.state;

    return (
      <form>
        <label htmlFor="name">Task</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange = {this.handleChange} />
        <label htmlFor="job">Description</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange = {this.handleChange}
           onKeyPress={this.keyPressed}
        />
        <input type="button" value="Submit" onClick= {this.submitForm}/>
      </form>
    )
  }

  }

  export default Form;
