import { useState } from 'react'
import Body from './components/Body'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='text-4xl font-bold text-green-800'>
      Namaste, everyone, lets build</div>
      <About/>
    </>
  )
}

export default App
