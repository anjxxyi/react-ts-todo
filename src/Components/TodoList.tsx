import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Tlist {
  id: number;
  content: string;
  completed: boolean;
}

export default function TodoList() {
  const [TodoList, setTodoList] = useState<Tlist[]> ([
    { id: 1, content: "첫 번째 할일", completed: false },
    { id: 2, content: "두 번째 할일", completed: false },
    { id: 3, content: "세 번째 할일", completed: false },
  ]);

  return (
    <ul id="contents" className="todoList">
      {TodoList.map((item) => (
        <TodoItem key={item.id} content={item.content} completed={item.completed} />
      ))}
    </ul> 
  )
}
