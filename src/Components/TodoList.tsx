import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { TodosProps } from './Todo';

export default function TodoList({ todos }: { todos: TodosProps[] }) {
  return (
    <ul id="contents" className="todoList">
      {todos.map((item) => (
        <TodoItem key={item.id} content={item.content} completed={item.completed} />
      ))}
    </ul> 
  )
}
