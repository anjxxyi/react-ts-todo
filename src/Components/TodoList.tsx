import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { TodosProps } from './Todo';

interface TodoListProps {
  todos: TodosProps[];
  onClickDelete(id: number): void;
  onClickUpdate(newTodo: TodosProps): void;
}

export default function TodoList({ todos, onClickDelete, onClickUpdate }: TodoListProps) {
  return (
    <ul id="contents" className="todoList">
      {todos.map((item) => (
        <TodoItem 
          key={item.id} id={item.id} content={item.content} completed={item.completed} 
          onClickDelete={onClickDelete} onClickUpdate={onClickUpdate} 
        />
      ))}
    </ul> 
  )
}
