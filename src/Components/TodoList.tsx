import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { TodosProps } from './Todo';

export default function TodoList({ todos, onClickDelete }: { todos: TodosProps[], onClickDelete(id: number): void }) {
  return (
    <ul id="contents" className="todoList">
      {todos.map((item) => (
        <TodoItem key={item.id} id={item.id} content={item.content} completed={item.completed} onClickDelete={onClickDelete} />
      ))}
    </ul> 
  )
}
