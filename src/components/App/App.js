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
    ],
    value: '',
    filter: 'All'
  }
  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    }
  }
  onSearch = value => this.setState({value})
  onFilter = filter => this.setState({filter})
  onDeleteItem = id => this.setState(({todoData}) => ({
    todoData: todoData.filter(el => el.id !== id)
  }))
  onEditItem = (id, action) => this.setState(({todoData}) => ({
    todoData: todoData.map(el => {
      if (el.id === id) el[action] = !el[action]
      return el
    })
  }))
  onAddItem = text => this.setState(({todoData}) => ({
    todoData: [
      ...todoData,
      this.createTodoItem(text)
    ]
  }))
  render() {
    const {todoData, value, filter} = this.state
    const doneCount = todoData.filter(({done}) => done).length
    const todoCount = todoData.length - doneCount
    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="panel">
          <SearchInput onSearch={this.onSearch} />
          <FilterStatus 
            filter={filter}
            onFilter={this.onFilter} />
        </div>
        <TodoList
          todos={todoData}
          value={value}
          filter={filter}
          onDeleteItem={this.onDeleteItem}
          onEditItem={this.onEditItem} />
        <TodoAddItem onAddItem={this.onAddItem} />
      </div>
    )
  }
}