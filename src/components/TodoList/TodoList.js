import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'

import './todo-list.css'

const TodoList = ({todos, onDeleteItem, onToggleImportant, onToggleDone}) => (
  <ul className="list-group">
    {todos.map(({id, ...items}) => (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...items}
          onDeleteItem={() => onDeleteItem(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)} />
      </li>
    ))}
  </ul>
)

export default TodoList