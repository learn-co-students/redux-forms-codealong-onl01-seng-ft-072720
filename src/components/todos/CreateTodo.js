import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  };

//In order for this to correctly reference this specific instance of our component, 
//we need to either bind it (often done in the constructor()), or use an arrow function in our onChange event handler.
//Because arrow functions don't define their own version of this, they'll default to the context they are in.
handleChange = event => {
  this.setState({
    text: event.target.value
  });
};

handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state);
};


  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
              <label>add todo</label>
              {/* //All this code does is say that every time the user changes the input 
              field (that is, whenever the user types something in) we should call our handleChange() function  */}
              <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {/* {this.state.text} */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
