import { useState } from 'react'
import Body from './components/Body'
import About from './components/About'
import Onlinestatus from './Onlinestatus';
function App() {
  const [count, setCount] = useState(0)
  const useOnlinestatus = Onlinestatus();
  return (
    <>
     <div className='text-4xl font-bold text-green-800'>
      Namaste, everyone, lets build</div>
      <About/>
      <li>{useOnlinestatus?"true":"false"}</li>
    </>
  )
}

export default App
