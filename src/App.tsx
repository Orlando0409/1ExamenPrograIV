import { useState } from 'react'
import './App.css'
import PageLayout from './PageLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageLayout/>
    </>
  )
}

export default App
