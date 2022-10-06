import './logo-component.css'

export const Logo = ({ small }) => {
  return (
    <div className={`title ${small}`}>
      <div className='logo-box'>
        ToDo
        <br />
        ToDo
      </div>
      <h1>List</h1>
    </div>
  )
}
