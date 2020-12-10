import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    input: ''
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      input: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Todo</label>
            <input type='text' onChange={this.handleChange} value={this.state.input}/>
          </p>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
