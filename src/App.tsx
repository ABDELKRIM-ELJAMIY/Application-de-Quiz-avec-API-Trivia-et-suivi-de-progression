import { useState } from 'react'
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </Router>
  )
}

export default App
