import './App.css'
import LoginClassForm from './components/LoginClassForm'
import { LoginForm } from './components/LoginForm'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <Todos />
      <LoginForm />
      <div className='mt-20'>
        <LoginClassForm />
      </div>
    </>
  )
}

export default App
