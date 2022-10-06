import { useState, createContext } from 'react'

const initValue = {
  startAnim: false,
}

export const HiddenContext = createContext(initValue)

export const IsHiddenContextProvider = ({ children }) => {
  const [startAnim, setStartAnim] = useState(initValue)
  const currentValue = { startAnim, setStartAnim }

  return <HiddenContext.Provider value={currentValue}>{children}</HiddenContext.Provider>
}
