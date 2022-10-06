import './task-line-component.css'

export default function Tasklist(props) {
  const { taskList, deletTask, handleComplete } = props

  return taskList.map((task, i) => (
    <div key={`task_container_${i}`} className={`task-list-line `}>
      <li key={i} className={`${task.isValid ? '' : 'cross-title'}`}>
        {task.task}{' '}
      </li>
      <div className='button-container'>
        {deletTask ? (
          <button key={`btn_del_${i}`} className='delete' id={i} onClick={() => deletTask(i)}>
            ❌
          </button>
        ) : (
          ''
        )}
        {handleComplete ? (
          <button key={`btn_cross_${i}`} onClick={() => handleComplete(i)}>
            ✅
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  ))
}
