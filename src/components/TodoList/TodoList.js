import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'

import './todo-list.css'

const TodoList = ({todos, value, filter, onDeleteItem, onEditItem}) => {
  let todoList
  switch(filter) {
    case 'Active': {
      todoList = todos.filter(({done}) => !done)
      break
    }
    case 'Done': {
      todoList = todos.filter(({done}) => done)
      break
    }
    default: todoList = [...todos]
  }
  return (
    <ul className="list-group">
      {todoList.filter(({label}) => label.toLowerCase().includes(value.toLowerCase()))
        .map(({id, ...items}) => (
          <li key={id} className="list-group-item">
            <TodoListItem
              {...items}
              onDeleteItem={() => onDeleteItem(id)}
              onEditItem={action => onEditItem(id, action)} />
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList