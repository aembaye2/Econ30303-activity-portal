// App.js
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages"
import Discussion03 from "./pages/Discussion03"
import Footer from "./components/Footer" // Import the Footer component

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Discussion03" element={<Discussion03 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
