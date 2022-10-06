import './App.css'

import { TodoApp } from './public/TodoComponents/TodoApp'
import { LoadingPage } from './public/loading-page/load-page/landing-page-component'
import { IsHiddenContextProvider } from './public/context-provider/context-provider-component.jsx'

function App() {
  return (
    <IsHiddenContextProvider>
      <LoadingPage />
      <TodoApp />
    </IsHiddenContextProvider>
  )
}

export default App
