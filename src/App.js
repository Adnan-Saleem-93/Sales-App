import './App.css'
import {Routes, Route} from 'react-router-dom'
import LoginView from './Views/Login'
import SignupView from './Views/Signup'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<SignupView />} />
      <Route path="/" element={<LoginView />} />
    </Routes>
  )
}

export default App
