import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const Todo = () => {
  return (
    <div id="container" className="todo">
      <TodoList />
      <TodoForm />
    </div>
  )
}

export default Todo