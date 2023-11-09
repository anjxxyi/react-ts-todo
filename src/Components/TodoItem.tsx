import React from 'react'

interface TodoProps {
  content: string;
  completed: boolean;
}

export default function TodoItem({ content, completed }: TodoProps) {
  return (
    <li className="todoItem">
      <input type="checkbox" name="" id="" checked={completed}/>
      <p>{content}</p>
      <div className="btnBox">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </li>
  )
}
