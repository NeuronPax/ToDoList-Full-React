import React from 'react'

import './todo-list-item.css'

const TodoListItem = ({label, important, done, onDeleteItem,
  onToggleImportant, onToggleDone}) => {
    let styles = 'list-items'
    if (important) styles += ' important'
    if (done) styles += ' done'
    return (
      <span className={styles}>
        <span onClick={onToggleDone}>{label}</span>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={onDeleteItem}>
            <i className="fa fa-trash" />
        </button>
      </span>
    )
}

export default TodoListItem