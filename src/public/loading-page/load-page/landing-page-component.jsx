import './landing-page-component.css'
import { useState } from 'react'
import { GenerateAnimatedBox } from '../../animated-box-generator/animated-box-generator-component'
import { useContext } from 'react'
import { HiddenContext } from '../../context-provider/context-provider-component'

export const LoadingPage = ({ boxes }) => {
  const [hide, sethide] = useState(false)
  const [remove, setRemove] = useState(false)
  const { setStartAnim } = useContext(HiddenContext)

  return (
    !remove && (
      <section
        className={`load-section ${hide ? 'hide' : ''} `}
        onClick={() => {
          sethide(true)
          setStartAnim({ startAnim: true })
          setTimeout(() => setRemove(true), 500)
        }}
      >
        <GenerateAnimatedBox boxName={'box'} numBoxes={5} />
        <div className='tilte'>
          <div className='logo-box'>
            ToDo
            <br />
            ToDo
          </div>
          <h1>List</h1>
        </div>
        <p>click to carry on</p>
      </section>
    )
  )
}
