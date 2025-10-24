import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateCharacter from './pages/CreateCharacter'
import './styles/global.css'

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<CreateCharacter />}/>
        </Routes>
    </Router>
  )
}

export default App
