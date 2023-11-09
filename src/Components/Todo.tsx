import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export interface TodosProps {
  id: number;
  content: string;
  completed: boolean;
}

export default function Todo() {
  const [inputContent, setInputContent] = useState("")
  const [todos, setTodos] = useState<TodosProps[]> ([
    { id: 1, content: "첫 번째 할일", completed: false },
    { id: 2, content: "두 번째 할일", completed: false },
    { id: 3, content: "세 번째 할일", completed: false },
  ])
  
  const inputTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  }

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo: TodosProps = {
      id: todos.length + 1,
      content: inputContent,
      completed: false,
    };
    setTodos([... todos, todo]);

    setInputContent("");
  }

  return (
    <div id="container" className="todo">
      <TodoList todos={todos} />
      <TodoForm onChange={inputTypingHandler} onSubmit={addTodoHandler} inputContent={inputContent} />
    </div>
  )
}