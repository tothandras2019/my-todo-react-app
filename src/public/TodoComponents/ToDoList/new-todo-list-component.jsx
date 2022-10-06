import Tasklist from '../TaskList/task-line-component'
import './new-todo-list-component.css'

export const TodoListComponent = ({ typeName, taskList, deletTask, handleComplete }) => {
  const numList = taskList.length
  return (
    <header>
      <div className='header-descreption'>
        <h4>{typeName}</h4>
        <p>{numList}</p>
      </div>
      <div className='separator'></div>
      <Tasklist taskList={taskList} deletTask={deletTask} handleComplete={handleComplete} />
    </header>
  )
}
