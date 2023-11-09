import React from 'react'

export default function TodoForm() {
  return (
    <div id="contents" className="todoForm">
      <form>
        <input type="text" placeholder="할 일을 입력해 주세요." />
        <button>등록</button>
      </form>
    </div>
  )
}
