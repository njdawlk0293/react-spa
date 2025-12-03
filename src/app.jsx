import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './assets/app.css'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import ReactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <Router>
        <header>
          <img src={ReactLogo} className="logo" alt="React logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
