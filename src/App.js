import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Log from './components/Log/Log'
import StyleGlobal from './utils/styles/StyleGlobal'
import Footer from './components/Footer/index.jsx'
import Home from './pages/Home/index.jsx'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <StyleGlobal />
        <Header />

        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/home" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
