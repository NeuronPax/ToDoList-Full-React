import React, {Component} from 'react'

import './todo-add-item.css'

export default class TodoAddItem extends Component {
  state = {value: ''}
  onInputChange = ({target: {value}}) => this.setState({value})
  onFormSubmit = e => {
    e.preventDefault()
    this.props.onAddItem(this.state.value)
    this.setState({value: ''})
  }
  render() {
    return (
      <form
        className="todo-add-item"
        onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            placeholder="What needs to be done"
            value={this.state.value}
            onChange={this.onInputChange} />
          <button className="btn btn-outline-secondary">Add</button>
      </form>
    )
  }
}