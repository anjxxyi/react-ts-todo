import React, { useState } from 'react'
import { TodosProps } from './Todo';

interface TodoProps {
  id: number;
  content: string;
  completed: boolean;
  onClickDelete(id: number): void;
  onClickUpdate(editItem: TodosProps): void;
}

export default function TodoItem({ id, content, completed, onClickDelete, onClickUpdate }: TodoProps) {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>(content);

  const editTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  }

  const editSubmiHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedTodo = {
      id: id,
      content: editContent,
      completed: completed,
    };

    onClickUpdate(updatedTodo);
    setIsEdited(false);
  }

  const completeHandler = () => {
    const updatedTodo = {
      id: id,
      content: content,
      completed: !completed,
    };

    onClickUpdate(updatedTodo);
  };


  return (
    <>
    { !isEdited ? (
      <li className="todoItem">
        <button type="button" onClick={completeHandler}>
          { completed ? "✔" : null }
        </button>
        <p style={ completed ? { textDecoration: "line-through" } : undefined }>{content}</p>
        <div className="btnBox">
          <button type="button" onClick={() => setIsEdited(true)}>수정</button>
          <button type="button" onClick={() => onClickDelete(id)}>삭제</button>
        </div>
      </li>
    ) : (
      <li className="todoItem">
        <form onSubmit={editSubmiHandler}>
          <input type="text" value={editContent} onChange={editTypingHandler} />
          <div className="btnBox">
            <button type="submit">확인</button>
            <button type="button" onClick={() => setIsEdited(false)}>취소</button>
          </div>
        </form>
      </li>
    )}</>
  )
}
