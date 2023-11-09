import React from 'react'

interface TodoProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  inputContent: string;
}

export default function TodoForm({ onChange, onSubmit, inputContent }: TodoProps) {
  return (
    <div id="contents" className="todoForm">
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={(e) => onChange(e)} type="text" placeholder="할 일을 입력해 주세요." value={inputContent} />
        <button type="submit">등록</button>
      </form>
    </div>
  )
}
