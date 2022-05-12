import React, {Component} from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchInput from '../SearchInput/SearchInput'
import FilterStatus from '../FilterStatus/FilterStatus'
import TodoList from '../TodoList/TodoList'
import TodoAddItem from '../TodoAddItem/TodoAddItem'

import './app.css'

export default class App extends Component {
  maxId = 1
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create Awesome App'),
      this.createTodoItem('Have a Lunch')
    ]
  }
  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    }
  }
  onDeleteItem = id => this.setState(({todoData}) => ({
    todoData: todoData.filter(el => el.id !== id)
  }))
  toggleProperty = (arr, id, keyName) => arr.map(el => {
    if (el.id === id) el[keyName] = !el[keyName]
    return el
  })
  onToggleImportant = id => this.setState(({todoData}) => ({
    todoData: this.toggleProperty(todoData, id, 'important')
  }))
  onToggleDone = id => this.setState(({todoData}) => ({
    todoData: this.toggleProperty(todoData, id, 'done')
  }))
  onAddItem = text => this.setState(({todoData}) => ({
    todoData: [
      ...todoData,
      this.createTodoItem(text)
    ]
  }))
  render() {
    const {todoData} = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount
    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="panel">
          <SearchInput />
          <FilterStatus />
        </div>
        <TodoList
          todos={todoData}
          onDeleteItem={this.onDeleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <TodoAddItem onAddItem={this.onAddItem} />
      </div>
    )
  }
}