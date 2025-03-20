import { useState } from 'react'
import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  )
}

export default App
