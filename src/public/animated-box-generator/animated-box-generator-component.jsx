import './animated-box-component.css'

export const GenerateAnimatedBox = ({ boxName, numBoxes }) => {
  const resultBox = []
  for (let i = 1; i <= numBoxes; i++) {
    resultBox.push(<div key={i} className={`animated box ${boxName}_${i}`}></div>)
  }
  return resultBox
}
