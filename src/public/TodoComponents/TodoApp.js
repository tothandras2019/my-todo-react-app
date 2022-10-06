import { useState, useRef } from 'react'
import Form from './InputForm/form-component.jsx'
import AsideContainer from '../Input-container/input-container-component.jsx'
import { GenerateAnimatedBox } from '../animated-box-generator/animated-box-generator-component'
import { Logo } from '../logo/logo-component.jsx'
import { TodoListComponent } from './ToDoList/new-todo-list-component.jsx'
import { HiddenContext } from '../context-provider/context-provider-component.jsx'
import { useContext } from 'react'

import './TodoApp.css'

export function TodoApp() {
  const [taskList, setTaskList] = useState([
    { task: 'kutya sétáltatás', isValid: true },
    { task: 'mozi délután', isValid: true },
  ])

  const [removedList, setRemovedList] = useState([]) /*this have to be an empty useState for define the num tasks!*/

  const [newTask, setNewTask] = useState('')
  const inputRef = useRef(null)

  const { startAnim } = useContext(HiddenContext)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    console.log(formData)

    if (newTask !== '') {
      setTaskList([...taskList, { task: newTask, isValid: true }])
      inputRef.current.value = ''
      setNewTask('')
    }
  }

  function handleChangeTask(event) {
    const taskInput = event.target.value
    setNewTask(taskInput)
  }

  function deletTask(id) {
    setRemovedList(removedList.filter((task, i) => id !== i))
  }

  // function handleComplete(id) {
  //   setTaskList(
  //     taskList.map((task, i) => {
  //       if (id === i) task.isValid = false
  //       return task
  //     }),
  //   )
  // }

  function handleComplete(id) {
    const task = taskList.find((task, i) => i === id)

    setTaskList(taskList.filter((task, i) => id !== i))
    setRemovedList([...removedList, task])
  }

  return (
    <section className={`todo-section load-section ${startAnim.startAnim ? 'appear' : ''} `}>
      <GenerateAnimatedBox boxName={'box_todo'} numBoxes={5} />
      <div className='todo-center'>
        <AsideContainer className='input-container' title='Add new task' logoComponent={<Logo small='small' />}>
          <Form inputRef={inputRef} handleSubmit={handleSubmit} handleChangeTask={handleChangeTask} />
        </AsideContainer>
        <AsideContainer className='todo-container' title='Your task list' logoComponent={''}>
          <TodoListComponent typeName={'to do'} taskList={taskList} handleComplete={handleComplete} />
          <TodoListComponent typeName={'done'} taskList={removedList} deletTask={deletTask} />
        </AsideContainer>
      </div>
    </section>
  )
}
