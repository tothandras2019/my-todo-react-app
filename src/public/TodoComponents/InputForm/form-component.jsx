import { useState } from 'react'

import './form-component.css'

export default function Form(props) {
  const [move, setMove] = useState(false)
  const inputRefference = props.inputRef

  return (
    <form onSubmit={props.handleSubmit} action='submit'>
      <span className={`${move ? 'move' : ''}`}>
        <input
          ref={inputRefference}
          onBlur={() => {
            if (inputRefference.current.value === '') setMove(false)
          }}
          onClick={() => {
            setMove(true)
          }}
          onChange={props.handleChangeTask}
          type='text'
          name='new-task'
          className='task-input'
          placeholder=''
        />
      </span>
      <button type='submit'>add new</button>
    </form>
  )
}
