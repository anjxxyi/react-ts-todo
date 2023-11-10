import React from 'react'

interface TodoProps {
  id: number;
  content: string;
  completed: boolean;
  onClickDelete(id: number): void;
}

export default function TodoItem({ id, content, completed, onClickDelete }: TodoProps) {
  return (
    <li className="todoItem">
      <input type="checkbox" name="" id="" checked={completed}/>
      <p>{content}</p>
      <div className="btnBox">
        <button>수정</button>
        <button type="button" onClick={() => onClickDelete(id)}>삭제</button>
      </div>
    </li>
  )
}
